import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Breadcrumb } from '../../../shared/interface/breadcrumb';
import { AccountUser } from "../../../shared/interface/account.interface";
import { AccountState } from '../../../shared/state/account.state';
import { CartState } from '../../../shared/state/cart.state';
import { OrderState } from '../../../shared/state/order.state';
import { Checkout, PlaceOrder } from '../../../shared/action/order.action';
import { ClearCart } from '../../../shared/action/cart.action';
import { AddressModalComponent } from '../../../shared/components/widgets/modal/address-modal/address-modal.component';
import { Cart } from '../../../shared/interface/cart.interface';
import { SettingState } from '../../../shared/state/setting.state';
import { GetSettingOption } from '../../../shared/action/setting.action';
import { OrderCheckout } from '../../../shared/interface/order.interface';
import { Values, DeliveryBlock } from '../../../shared/interface/setting.interface';
import { CartService } from '../../../shared/services/cart.service';
import { CountryState } from '../../../shared/state/country.state';
import { StateState } from '../../../shared/state/state.state';
import { AuthState } from '../../../shared/state/auth.state';
import * as data from '../../../shared/data/country-code';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  public breadcrumb: Breadcrumb = {
    title: "Checkout",
    items: [{ label: 'Checkout', active: true }]
  }

  @Select(AccountState.user) user$: Observable<AccountUser>;
  @Select(AuthState.accessToken) accessToken$: Observable<string>;
  @Select(CartState.cartItems) cartItem$: Observable<Cart[]>;
  @Select(OrderState.checkout) checkout$: Observable<OrderCheckout>;
  @Select(SettingState.setting) setting$: Observable<Values>;
  @Select(CartState.cartHasDigital) cartDigital$: Observable<boolean | number>;
  @Select(CountryState.countries) countries$: Observable<Select2Data>;
  
  @ViewChild("addressModal") AddressModal: AddressModalComponent;
  @ViewChild('cpn', { static: false }) cpnRef: ElementRef<HTMLInputElement>;
  @ViewChild("payByQRModal") payByQRModal: TemplateRef<any>;

  public form: FormGroup;
  public coupon: boolean = true;
  public couponCode: string;
  public appliedCoupon: boolean = false;
  public couponError: string | null;
  public checkoutTotal: OrderCheckout;
  public loading: boolean = false;

  public shippingStates$: Observable<Select2Data>;
  public billingStates$: Observable<Select2Data>;
  public codes = data.countryCodes;

  constructor(private store: Store, private router: Router,
    private formBuilder: FormBuilder, public cartService: CartService,
        private modalService: NgbModal) {
    this.store.dispatch(new GetSettingOption());

    this.form = this.formBuilder.group({
      products: this.formBuilder.array([], [Validators.required]),
      shipping_address_id: new FormControl('', [Validators.required]),
      billing_address_id: new FormControl('', [Validators.required]),
      points_amount: new FormControl(false),
      wallet_balance: new FormControl(false),
      coupon: new FormControl(),
      delivery_description: new FormControl('', [Validators.required]),
      delivery_interval: new FormControl(),
      payment_method: new FormControl('', [Validators.required]),
      create_account: new FormControl(false),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country_code: new FormControl('91', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl(),
      shipping_address: new FormGroup({
        title: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
        country_code: new FormControl('91', [Validators.required]),
        country_id: new FormControl('', [Validators.required]),
        state_id: new FormControl('', [Validators.required]),
      }),
      billing_address: new FormGroup({
        same_shipping: new FormControl(false),
        title: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
        country_code: new FormControl('91', [Validators.required]),
        country_id: new FormControl('', [Validators.required]),
        state_id: new FormControl('', [Validators.required]),
      })
    });
    
    this.store.selectSnapshot(state => state.setting).setting.activation.guest_checkout = true;
    
    if(this.store.selectSnapshot(state => state.auth && state.auth.access_token)) {
      this.form.removeControl('create_account');
      this.form.removeControl('name');
      this.form.removeControl('email');
      this.form.removeControl('country_code');
      this.form.removeControl('phone');
      this.form.removeControl('password');
      this.form.removeControl('password_confirmation');
      this.form.removeControl('shipping_address');
      this.form.removeControl('billing_address');

      this.cartDigital$.subscribe(value => {
        if(value == 1) {
          this.form.controls['shipping_address_id'].clearValidators();
          this.form.controls['delivery_description'].clearValidators();
        } else {
          this.form.controls['shipping_address_id'].setValidators([Validators.required]);
          this.form.controls['delivery_description'].setValidators([Validators.required]);
        }
        this.form.controls['shipping_address_id'].updateValueAndValidity();
        this.form.controls['delivery_description'].updateValueAndValidity();
      });

    } else {

      if(this.store.selectSnapshot(state => state.setting).setting.activation.guest_checkout) {
        this.form.removeControl('shipping_address_id');
        this.form.removeControl('billing_address_id');
        this.form.removeControl('points_amount');
        this.form.removeControl('wallet_balance');
        
        this.form.controls['create_account'].valueChanges.subscribe(value => {
          if(value) {
            this.form.controls['name'].setValidators([Validators.required]);
            this.form.controls['password'].setValidators([Validators.required]);
          } else {
            this.form.controls['name'].clearValidators();
            this.form.controls['password'].clearValidators();
          }
          this.form.controls['name'].updateValueAndValidity();
          this.form.controls['password'].updateValueAndValidity();
        });

        this.form.statusChanges.subscribe(value => {
          if(value == 'VALID') {
            this.checkout();
          }
        });

      }

    }

    this.form.get('billing_address.same_shipping')?.valueChanges.subscribe(value => {
      if(value) {
        this.form.get('billing_address.title')?.setValue(this.form.get('shipping_address.title')?.value);
        this.form.get('billing_address.street')?.setValue(this.form.get('shipping_address.street')?.value);
        this.form.get('billing_address.country_id')?.setValue(this.form.get('shipping_address.country_id')?.value);
        this.form.get('billing_address.state_id')?.setValue(this.form.get('shipping_address.state_id')?.value);
        this.form.get('billing_address.city')?.setValue(this.form.get('shipping_address.city')?.value);
        this.form.get('billing_address.pincode')?.setValue(this.form.get('shipping_address.pincode')?.value);
        this.form.get('billing_address.country_code')?.setValue(this.form.get('shipping_address.country_code')?.value);
        this.form.get('billing_address.phone')?.setValue(this.form.get('shipping_address.phone')?.value);
      } else {
        this.form.get('billing_address.title')?.setValue('');
        this.form.get('billing_address.street')?.setValue('');
        this.form.get('billing_address.country_id')?.setValue('');
        this.form.get('billing_address.state_id')?.setValue('');
        this.form.get('billing_address.city')?.setValue('');
        this.form.get('billing_address.pincode')?.setValue('');
        this.form.get('billing_address.country_code')?.setValue('');
        this.form.get('billing_address.phone')?.setValue('');
      }
    });
    
    this.cartService.getUpdateQtyClickEvent().subscribe(() => {
      this.products();
      this.checkout();
    });
    
  }

  get productControl(): FormArray {
    return this.form.get("products") as FormArray;
  }

  ngOnInit() {
    this.checkout$.subscribe(data => this.checkoutTotal = data);
    this.products();
  }

  products() {
    this.cartItem$.subscribe(items => {
      this.productControl.clear();
      items.forEach((item: Cart) =>
        this.productControl.push(
          this.formBuilder.group({
            product_id: new FormControl(item?.product_id, [Validators.required]),
            variation_id: new FormControl(item?.variation_id ? item?.variation_id : ''),
            quantity: new FormControl(item?.quantity),
          })
      ));
    });
  }

  selectShippingAddress(id: number) {
    if(id) {
      this.form.controls['shipping_address_id'].setValue(Number(id));
      this.checkout();
    }
  }

  selectBillingAddress(id: number) {
    if(id) {
      this.form.controls['billing_address_id'].setValue(Number(id));
      this.checkout();
    }
  }

  selectDelivery(value: DeliveryBlock) {
    this.form.controls['delivery_description'].setValue(value?.delivery_description);
    this.form.controls['delivery_interval'].setValue(value?.delivery_interval);
    this.checkout();
  }

  selectPaymentMethod(value: string) {
    this.form.controls['payment_method'].setValue(value);
    // this.checkout();
    switch (value) {
      case 'payment_by_qr':
        // Call Popup for QR Code
        this.openModal();
        break;
    
      default:
        break;
    }
  }

  async openModal() {
    this.modalService.open(this.payByQRModal, {
      ariaLabelledBy: 'address-add-Modal',
      centered: true,
      windowClass: 'theme-modal modal-lg address-modal'
    }).result.then((result) => {
      `Result ${result}`
    }, (reason) => {
      console.log(`Reason ${reason}`)
    });
  }


  togglePoint(event: Event) {
    this.form.controls['points_amount'].setValue((<HTMLInputElement>event.target)?.checked);
    this.checkout();
  }

  toggleWallet(event: Event) {
    this.form.controls['wallet_balance'].setValue((<HTMLInputElement>event.target)?.checked);
    this.checkout();
  }

  showCoupon() {
    this.coupon = true;
  }

  setCoupon(value?: string) {
    this.couponError = null;

    if(value)
      this.form.controls['coupon'].setValue(value);
    else
      this.form.controls['coupon'].reset();

    this.store.dispatch(new Checkout(this.form.value)).subscribe({
      error: (err) => {
        this.couponError = err.message;
      },
      complete: () => {
        this.appliedCoupon = value ? true : false;
        this.couponError = null;
      }
    });
  }

  couponRemove() {
    this.setCoupon();
  }

  shippingCountryChange(data: Select2UpdateEvent) {
    if(data && data?.value) {
      this.shippingStates$ = this.store
          .select(StateState.states)
          .pipe(map(filterFn => filterFn(+data?.value)));
    } else {
      this.form.get('shipping_address.state_id')?.setValue('');
      this.shippingStates$ = of();
    }
  }

  billingCountryChange(data: Select2UpdateEvent) {
    if(data && data?.value) {
      this.billingStates$ = this.store
          .select(StateState.states)
          .pipe(map(filterFn => filterFn(+data?.value)));
      if(this.form.get('billing_address.same_shipping')?.value) {
        setTimeout(() => {
          this.form.get('billing_address.state_id')?.setValue(this.form.get('shipping_address.state_id')?.value);
        }, 200);
      }
    } else {
      this.form.get('billing_address.state_id')?.setValue('');
      this.billingStates$ = of();
    }
  }

  checkout() {
    // If has coupon error while checkout
    if(this.couponError){
      this.couponError = null;
      this.cpnRef.nativeElement.value = '';
      this.form.controls['coupon'].reset();
    }

    if(this.form.valid) {
      this.loading = true;
      this.store.dispatch(new Checkout(this.form.value)).subscribe({
        error: (err) => {
          this.loading = false;
          throw new Error(err);
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      const invalidFields = Object?.keys(this.form?.controls).filter(key => this.form.controls[key].invalid);
    }
  }

  placeorder() {
    if(this.form.valid) {
      if(this.cpnRef && !this.cpnRef.nativeElement.value) {
        this.form.controls['coupon'].reset();
      }
      this.store.dispatch(new PlaceOrder(this.form.value));
    }
  }

  clearCart(){
    this.store.dispatch(new ClearCart());
  }

  ngOnDestroy() {
    // this.store.dispatch(new Clear());
    this.store.dispatch(new ClearCart());
    this.form.reset();
  }

}
