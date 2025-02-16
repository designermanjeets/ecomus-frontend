import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { Router } from '@angular/router';
import { Observable, Subscription, map, of } from 'rxjs';
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
import { DomSanitizer } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { delay, switchMap, takeWhile, tap } from 'rxjs/operators';
import { OrderService } from '../../../shared/services/order.service';
import { v4 as uuidv4 } from 'uuid';
// import { PaymentInitModal } from 'pg-test-project';
// import * as React from 'react';

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

  public formData!: any;

  private pollingSubscription!: Subscription;
  private pollingInterval = 5000; // Poll every 5 seconds

  storeData: any;
  localUserCheck: any;

  // Sub Paisa Config
  // @ViewChild('SubPaisaSdk', { static: true }) containerRef!: ElementRef;
  // formData = {
  //   env: 'stag',
  //   clientCode: 'LPS01',
  //   onToggle:() =>this.render(false) 
  // };
  // reactRoot: any = null;

  constructor(
    private store: Store, private router: Router,
    private formBuilder: FormBuilder, public cartService: CartService,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer,
        private orderService: OrderService
      ) {
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

    this.form.controls['phone']?.valueChanges.subscribe((value) => {
      if(value && value.toString().length > 10) {
        this.form.controls['phone']?.setValue(+value.toString().slice(0, 10));
      }
    });

    this.form.get('shipping_address.phone')?.valueChanges.subscribe((value) => {
      if(value && value.toString().length > 10) {
        this.form.get('shipping_address.phone')?.setValue(+value.toString().slice(0, 10));
      }
    });

    this.form.get('billing_address.phone')?.valueChanges.subscribe((value) => {
      if(value && value.toString().length > 10) {
        this.form.get('billing_address.phone')?.setValue(+value.toString().slice(0, 10));
      }
    });
    
    this.localUserCheck = JSON.parse(localStorage.getItem('account') || '');
    
  }

  get productControl(): FormArray {
    return this.form.get("products") as FormArray;
  }

  // private render(isOpen: boolean){
  //   this.reactRoot.render(
  //     React.createElement(PaymentInitModal, { ...this.formData as any, isOpen })
  //   )
  // }

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
        this.checkout();
        this.openModal();
        break;
      case 'sub_paisa':
        this.checkout();
        // this.openModal();
        break;  
      default:
        break;
    }
  }

  initiateSubPaisa(action: any) {
    const uuid = uuidv4();
    const userData = localStorage.getItem('account');
    const payload = {
      // ...this.form.value,
      uuid,
      // ...JSON.parse(userData || ''),
      ...JSON.parse(userData || '').user,
      checkout: this.storeData?.order?.checkout
      // ...JSON.parse(userData || '').user.address[0]
    }
    // console.log('Store Data', this.storeData)
    this.cartService.initiateSubPaisa(
      { 
        uuid: payload.uuid, 
        email: payload.email,
        total: this.storeData?.order?.checkout?.total?.total,
        phone: JSON.parse(userData || '').user.phone,
        name: JSON.parse(userData || '').user.name,
        address: JSON.parse(userData || '').user.address[0].city + ' ' + JSON.parse(userData || '').user.address[0].area
      }
    ).subscribe({
      next: (data) => {
        if (data) {
          this.formData = this.sanitizer.bypassSecurityTrustHtml(data?.data);
          const container = document.getElementById('paymentContainer');
        
          if (container) {
            container.innerHTML = data.data;
            const form = container.querySelector('form') as HTMLFormElement;
        
            setTimeout(() => {
              // ✅ Open a popup window (instead of a new tab)
              const paymentWindow = window.open(
                '', 
                'PaymentWindow', 
                'width=600,height=700,left=100,top=100,resizable=yes,scrollbars=yes'
              );
        
              if (paymentWindow) {
                paymentWindow.document.write(`
                  <html>
                    <head>
                      <title>Payment</title>
                    </head>
                    <body>
                      ${form.outerHTML}
                      <script>
                        document.getElementById('submitButton').click();
                      </script>
                    </body>
                  </html>
                `);
                paymentWindow.document.close(); // Ensure the document is fully loaded
        
                // ✅ Start polling for payment status
                this.startPollingForPaymentStatus(uuid, action, paymentWindow);
              } else {
                console.error("Popup blocked. Please allow pop-ups for this site.");
              }
            }, 1000);
          }
        }
      },
      error: (err) => {
        console.log(err);
      }
    }); // Call Sub Paisa API
  }
  
  startPollingForPaymentStatus(uuid: any, action: any, paymentWindow: Window | null) {
    if (!paymentWindow) return;

    let windowClosedManually = false;

    // ✅ Start monitoring the payment window's URL and check if it's closed
    const urlCheckInterval = setInterval(() => {
        try {
            if (paymentWindow.closed) {
                console.log("Payment window closed manually or due to an issue.");
                clearInterval(urlCheckInterval);
                windowClosedManually = true;

                // ✅ If closed manually, inform the frontend
                this.handlePaymentSuccess({ status: false, reason: "Window closed manually" }, action, uuid);
                return;
            }

            const currentUrl = paymentWindow.location.href;
            console.log("Current Payment Window URL:", currentUrl);

            // ✅ Check if redirected to success or failure page
            if (currentUrl.includes("success") || currentUrl.includes("failure")) {
                console.log("Redirect detected, closing window.");
                clearInterval(urlCheckInterval);
                paymentWindow.close();

                // ✅ Process the response
                this.handlePaymentSuccess({ status: true, url: currentUrl }, action, uuid);
            }
        } catch (error) {
            // Catches CORS-related issues if the domain changes
            console.warn("Unable to access payment window URL (possible CORS issue).");
        }
    }, 1000); // Check every second

    // ✅ Continue polling for payment status
    this.pollingSubscription = interval(this.pollingInterval)
        .pipe(
            switchMap(() => this.cartService.checkPaymentResponse(uuid)),
            map(response => ({
                ...response,
                status: response.status || false
            })),
            delay(60000), // Wait before forcing status update
            map(response => ({
                ...response,
                status: true // Force status to true after 60s if still false
            })),
            takeWhile((response: { status: boolean }) => !response.status, true)
        )
        .subscribe({
            next: (response) => {
                console.log('Payment Status:', response);

                if (response.status) {
                    this.pollingSubscription.unsubscribe(); // Stop polling

                    // ✅ Close the popup window if still open
                    if (paymentWindow && !paymentWindow.closed) {
                        paymentWindow.close();
                        console.log("Payment popup closed automatically.");
                    }

                    this.handlePaymentSuccess(response, action, uuid);
                }
            },
            error: (err) => {
                console.error('Error checking payment status:', err);
            },
            complete: () => {
                if (windowClosedManually) {
                    console.log("Polling stopped: Payment window was closed manually.");
                }
            }
        });

    // ✅ Also track if window is closed without success/failure using `onbeforeunload`
    // const windowCloseCheck = setInterval(() => {
    //     if (paymentWindow.closed && !windowClosedManually) {
    //         console.log("Payment window closed manually.");
    //         clearInterval(windowCloseCheck);

    //         // ✅ Inform frontend that payment might be incomplete
    //         this.handlePaymentSuccess({ status: false, reason: "Window closed manually before success/failure" }, action, uuid);
    //     }
    // }, 1000);
}


  handlePaymentSuccess(response: any, action: any, uuid: any) {
    console.log('Payment was successful:', response);
    console.log('Call /order here now', action);
    this.store.dispatch(new PlaceOrder(Object.assign({}, action, { uuid: uuid })));
  }

  async checkPaymentResponse(uuid: any) {
    this.cartService.checkPaymentResponse(uuid).subscribe({
      next:(data) => {
        console.log(data);
        if(data.R === true || data.R === false) {
          console.log('Redirect to Success or Fail');
          this.router.navigate([ 'order/checkout-success' ], { queryParams: { order_status: data.R } });
        } else {
          console.log('Payment in Pending State');
        }
      },
      error:(err) => {
        console.log(err);
      }
    });
  }

  async redirectToPayURL() {
    this.cartService.redirectToPayUrl().subscribe({
      next:(data) => {
        console.log(data);
        if (data && data.url) {
          window.open(data.url, '_blank');
        }
      },
      error:(err) => {
        console.log(err);
      }
    });
  }

  async openModal() {
    this.modalService.open(this.payByQRModal, {
      ariaLabelledBy: 'address-add-Modal',
      centered: true,
      windowClass: 'theme-modal modal-lg address-modal'
    }).result.then((result) => {
      `Result ${result}`
      const formDataContainer = document.getElementById('formDataContainer');
      console.log(formDataContainer);
    }, (reason) => {
      const formDataContainer = document.getElementById('formDataContainer');
      console.log(formDataContainer);
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
        next:(value) => {
          this.storeData = value;
          console.log(this.storeData);
        },
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

      const formData = {
        ...this.form.value,
        // payment_method: 'cod' 
      }

      let action = new PlaceOrder(formData);
      // this.store.dispatch(new PlaceOrder(formData));

      this.initiateSubPaisa(formData);

      // setTimeout(() => {
        
      // this.orderService.placeOrder(action?.payload).pipe().subscribe({

      //   next: result => {
      //     if((action.payload.payment_method == 'cod' || action.payload.payment_method == 'bank_transfer') && !result.is_guest) {
      //       this.router.navigateByUrl(`/account/order/details/${result.order_number}`);
      //     } else if((action.payload.payment_method == 'cod' || action.payload.payment_method == 'bank_transfer') && result.is_guest) {
      //       this.router.navigate([ 'order/details' ], { queryParams: { order_number: result.order_number, email_or_phone: action?.payload.email } });
      //     } else {
      //       window.open(result.url, "_self");
      //     }
      //     this.loading = false;
      //   },
      //   error: err => {

      //     this.loading = false;
      //     const result = {
      //       order_number: '9999',
      //       url: '',
      //       is_guest: false
      //     };
      //     console.log(result)
      //     this.router.navigateByUrl('order/checkout-success')
      //     // if((action.payload.payment_method == 'sub_paisa' || action.payload.payment_method == 'cod' || action.payload.payment_method == 'bank_transfer') && !result.is_guest) {
      //     //   this.router.navigateByUrl(`/account/order/details/${result.order_number}`);
      //     // } else if((action.payload.payment_method == 'cod' || action.payload.payment_method == 'bank_transfer') && result.is_guest) {
      //     //   this.router.navigate([ 'order/details' ], { queryParams: { order_number: result.order_number, email_or_phone: action?.payload.email } });
      //     // } else {
      //     //   window.open(result.url, "_self");
      //     // }
      //     // throw new Error(err?.error?.message);
      //   }
      // });

      // }, 6000);
      // this.initiateSubPaisa();
    }
  }

  paybyqr() {
    this.modalService.dismissAll();
    // PlaceOrder Here
  }

  clearCart(){
    this.store.dispatch(new ClearCart());
  }

  ngOnDestroy() {
    // this.store.dispatch(new Clear());
    this.store.dispatch(new ClearCart());
    this.form.reset();
    this.pollingSubscription && this.pollingSubscription.unsubscribe();
  }

}
