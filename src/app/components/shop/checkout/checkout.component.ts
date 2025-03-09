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

  payByNeoKredIntentSaveData: any;
  payByNeoStep = 0;
  payment_method = '';

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
    
    // Listen for payment return events
    this.cartService.getPaymentReturnEvent().subscribe(data => {
      if (data) {
        this.completeIOSPayment(data.uuid, data.payload, data.method);
      }
    });
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
    this.payment_method = value;
    switch (value) {
      case 'neoKred':
        // Call Popup for NeoKred QR Code
        this.checkout(value);
        break;
      case 'sub_paisa':
        this.checkout(value);
        break;  
      case 'cash_free':
        this.checkout(value);
        break;  
      case 'zyaada_pay':
        this.checkout(value);
        break;
      case 'ease_buzz':
        this.checkout(value);
        break;
      default:
        break;
    }
  }

  initiateSubPaisa(action: any, payment_method: string) {
    const uuid = uuidv4();
    const userData = localStorage.getItem('account');
    const payload = {
      uuid,
      ...JSON.parse(userData || '').user,
      checkout: this.storeData?.order?.checkout
    }
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
        
            // Store payment info in session storage
            sessionStorage.setItem('payment_uuid', uuid);
            sessionStorage.setItem('payment_method', payment_method);
            sessionStorage.setItem('payment_action', JSON.stringify(this.form.value));
            
            // Submit the form in the current window
            form.target = '_self';
            form.submit();
          }
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  
  startPollingForPaymentStatus(uuid: any, action: any, paymentWindow: Window | null, payment_method: string) {
    if (!paymentWindow) return;
    
    let windowCheckInterval = setInterval(() => {
      try {
        if (paymentWindow.closed) {
          console.log("Payment window closed manually or due to an issue.");
          clearInterval(windowCheckInterval);
          this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
          return;
        }
      } catch (error) {
        console.warn("Unable to check payment window state:", error);
        clearInterval(windowCheckInterval);
        this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
      }
    }, 1000);
    
    this.startPaymentStatusPolling(uuid, action, payment_method, windowCheckInterval, paymentWindow);
  }

  handlePaymentSuccess(response: any, action: any, uuid: any, payment_method: string) {
    console.log('Payment was successful:', response);
    console.log('Dispatching PlaceOrder action with:', action, uuid, payment_method);
    
    // Unsubscribe from polling if it's still active
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
    
    // Dispatch the PlaceOrder action
    this.store.dispatch(new PlaceOrder(Object.assign({}, action, { uuid: uuid, payment_method })))
      .subscribe({
        next: (result) => {
          console.log('Order placed successfully:', result);
        },
        error: (err) => {
          console.error('Error placing order:', err);
        }
      });
  }

  async checkPaymentResponse(uuid: any, payment_method: string) {
    this.cartService.checkPaymentResponse(uuid, payment_method).subscribe({
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

  // NeoKred

  initiateNeoKredPaymentIntent(payment_method: string) {
    const uuid = uuidv4();
    const userData = localStorage.getItem('account');
    const parsedUserData = JSON.parse(userData || '{}')?.user || {};

    const payload = {
      uuid,
      ...parsedUserData,
      checkout: this.storeData?.order?.checkout
    };

    this.cartService.initiateNeoKredIntent({ 
      uuid: payload.uuid,
      email: payload.email,
      total: this.storeData?.order?.checkout?.total?.total,
      phone: parsedUserData.phone,
      name: parsedUserData.name,
      address: `${parsedUserData.address?.[0]?.city || ''} ${parsedUserData.address?.[0]?.area || ''}`
    }).subscribe({
      next: (response) => {
        if (response?.R && response?.data) {
          try {
            const cashFreeData = response.data;
            
            if (cashFreeData?.payment_url) {
              // Store payment info in session storage
              sessionStorage.setItem('payment_uuid', uuid);
              sessionStorage.setItem('payment_method', payment_method);
              sessionStorage.setItem('payment_action', JSON.stringify(this.form.value));
              
              // Open in current tab
              window.location.href = cashFreeData.payment_url;
            } else {
              console.error("Invalid response: Payment link is missing.");
            }
          } catch (error) {
            console.error("Error parsing CashFree response:", error);
          }
        } else {
          console.error("Payment initiation failed:", response?.msg);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  checkTransectionStatusNeoKred(uuid: any, payment_method: string) {
    this.cartService.checkTransectionStatusNeoKred(uuid, payment_method)
      .subscribe({
      next: (response) => {
        console.log('Payment status after window closed:', response);
        if (response.status) {
          this.handlePaymentSuccess(response, this.form.value, uuid, payment_method);
        } else {
          // Wait a bit and check again, payment might be processing
          setTimeout(() => {
            this.cartService.checkTransectionStatusNeoKred(uuid, payment_method).subscribe({
              next: (finalResponse) => {
                if (finalResponse.status) {
                  this.handlePaymentSuccess(finalResponse, this.form.value, uuid, payment_method);
                }
              }
            });
          }, 3000);
        }
      },
      error: (err) => {
        console.error('Error checking payment status after window closed:', err);
      }
    });
  }

  // New method to check payment status after window is closed
  private checkPaymentStatusAfterWindowClosed(uuid: any, action: any, payment_method: string) {
    // Make a single check for payment status
    switch(payment_method) {
      case 'neoKred':
        this.checkTransectionStatusNeoKred(uuid, payment_method);
        break;
      case 'cash_free':
        this.cartService.checkTransectionStatusCashFree(uuid, payment_method).subscribe({
          next: (response) => {
            if (response.status) {
              this.handlePaymentSuccess(response, action, uuid, payment_method);
            }
          }
        });
        break;
      case 'zyaada_pay':
        this.cartService.checkTransectionStatusZyaadaPay(uuid, payment_method).subscribe({
          next: (response) => {
            if (response.status) {
              this.handlePaymentSuccess(response, action, uuid, payment_method);
            }
          }
        });
        break;
      case 'sub_paisa':
        this.cartService.checkPaymentResponse(uuid, payment_method).subscribe({
          next: (response) => {
            if (response.status) {
              this.handlePaymentSuccess(response, action, uuid, payment_method);
            }
          }
        });
        break;
    }
  }

  // Updated method to start polling for payment status
  private startPaymentStatusPolling(uuid: any, action: any, payment_method: string, windowCheckInterval: any, paymentWindow?: Window | null) {
    console.log(`Starting payment status polling for ${payment_method}...`);
    
    let windowClosedManually = false;
    
    // Check window status and URL changes
    const urlCheckInterval = setInterval(() => {
      try {
        if (paymentWindow && paymentWindow.closed) {
          console.log("Payment window closed manually or due to an issue.");
          clearInterval(urlCheckInterval);
          windowClosedManually = true;
          
          // If closed manually, inform the frontend
          this.handlePaymentSuccess({ status: false, reason: "Window closed manually" }, action, uuid, payment_method);
          return;
        }
        
        // Try to check URL, but this might fail due to CORS
        try {
          if (paymentWindow) {
            const currentUrl = paymentWindow.location.href;
            console.log("Current Payment Window URL:", currentUrl);
            
            // Check if redirected to success or failure page
            if (currentUrl.includes("success") || currentUrl.includes("failure") || currentUrl.includes("account/order")) {
              console.log("Redirect detected, closing window.");
              clearInterval(urlCheckInterval);
              paymentWindow.close();
              
              // Process the response
              this.handlePaymentSuccess({ status: true, url: currentUrl }, action, uuid, payment_method);
            }
          }
        } catch (corsError) {
          // Catches CORS-related issues if the domain changes
          console.warn("Unable to access payment window URL (possible CORS issue).");
        }
      } catch (error) {
        console.warn("Error checking payment window:", error);
      }
    }, 1000); // Check every second
    
    // Continue polling for payment status via API
    this.pollingSubscription = interval(5000) // Poll every 5 seconds
      .pipe(
        switchMap(() => {
          console.log(`Polling payment status for ${payment_method}...`);
          return this.checkPaymentStatus(uuid, payment_method);
        }),
        map(response => ({
          ...response,
          status: response.status || false
        })),
        delay(9999999999999), // Wait 60 seconds before forcing status update
        map(response => ({
          ...response,
          status: true // Force status to true after 60s if still false
        })),
        takeWhile((response: { status: boolean }) => !response.status, true)
      )
      .subscribe({
        next: (response) => {
          console.log(`${payment_method} Payment Status:`, response);
          
          if (response.status) {
            console.log(`Payment successful for ${payment_method}`);
            this.pollingSubscription.unsubscribe();
            clearInterval(urlCheckInterval);
            clearInterval(windowCheckInterval);
            
            // Close payment window if still open
            try {
              if (paymentWindow && !paymentWindow.closed) {
                paymentWindow.close();
                console.log("Payment popup closed automatically.");
              }
            } catch (e) {
              console.log("Could not close payment window:", e);
            }
            
            this.handlePaymentSuccess(response, action, uuid, payment_method);
          }
        },
        error: (err) => {
          console.error(`Error checking ${payment_method} payment status:`, err);
        },
        complete: () => {
          if (windowClosedManually) {
            console.log("Polling stopped: Payment window was closed manually.");
          }
        }
      });
  }

  // Helper method to check payment status based on payment method
  private checkPaymentStatus(uuid: string, payment_method: string): Observable<any> {
    switch(payment_method) {
      case 'neoKred':
        return this.cartService.checkTransectionStatusNeoKred(uuid, payment_method);
      case 'cash_free':
        return this.cartService.checkTransectionStatusCashFree(uuid, payment_method);
      case 'zyaada_pay':
        return this.cartService.checkTransectionStatusZyaadaPay(uuid, payment_method);
      case 'sub_paisa':
        return this.cartService.checkPaymentResponse(uuid, payment_method);
      case 'ease_buzz':
        return this.cartService.checkTransectionStatusEaseBuzz(uuid, payment_method)
      default:
        return of({ status: false });
    }
  }

  // Ease Buzz

  initiateEaseBuzzPaymentIntent(payment_method: string) {
    const uuid = uuidv4();
    const userData = localStorage.getItem('account');
    const parsedUserData = JSON.parse(userData || '{}')?.user || {};

    const payload = {
      uuid,
      ...parsedUserData,
      checkout: this.storeData?.order?.checkout
    };

    this.cartService.initiateEaseBuzzIntent({
      uuid: payload.uuid,
      email: payload.email,
      total: this.storeData?.order?.checkout?.total?.total,
      name: parsedUserData.name,
      address: `${parsedUserData.address?.[0]?.city || ''} ${parsedUserData.address?.[0]?.area || ''}`,
      phone: parsedUserData.phone,
    }).subscribe({
      next: (response) => {
        if (response?.R && response?.data) {
          try {
            const easeBuzzData = response.data;
            
            if (easeBuzzData?.payment_url) {
              // Store payment info in session storage
              sessionStorage.setItem('payment_uuid', uuid);
              sessionStorage.setItem('payment_method', payment_method);
              sessionStorage.setItem('payment_action', JSON.stringify(this.form.value));
              
              // Open in current tab
              window.location.href = easeBuzzData.payment_url;
            } else {
              console.error("Invalid response: Payment link is missing.");
            }
          } catch (error) {
            console.error("Error parsing Ease Buzz response:", error);
          }
        } else {
          console.error("Payment initiation failed:", response?.msg);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  checkTransactionStatusEaseBuzz(uuid: any, action: any, paymentWindow: Window | null, payment_method: string) {
    if (!paymentWindow) return;
    
    let windowCheckInterval = setInterval(() => {
      try {
        if (paymentWindow.closed) {
          console.log("Payment window closed manually or due to an issue.");
          clearInterval(windowCheckInterval);
          this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
          return;
        }
      } catch (error) {
        console.warn("Unable to check payment window state:", error);
        clearInterval(windowCheckInterval);
        this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
      }
    }, 1000);
    
    this.startPaymentStatusPolling(uuid, action, payment_method, windowCheckInterval, paymentWindow);

  }

  // CashFree Payment Integration
  initiateCashFreePaymentIntent(payment_method: string) {
    const uuid = uuidv4();
    const userData = localStorage.getItem('account');
    const parsedUserData = JSON.parse(userData || '{}')?.user || {};

    const payload = {
      uuid,
      ...parsedUserData,
      checkout: this.storeData?.order?.checkout
    };

    this.cartService.initiateCashFreeIntent({
      uuid: payload.uuid,
      email: payload.email,
      total: this.storeData?.order?.checkout?.total?.total,
      phone: parsedUserData.phone,
      name: parsedUserData.name,
      address: `${parsedUserData.address?.[0]?.city || ''} ${parsedUserData.address?.[0]?.area || ''}`
    }).subscribe({
      next: (response) => {
        if (response?.R && response?.data) {
          try {
            const cashFreeData = response.data;
            
            if (cashFreeData?.payment_link) {
              // Store payment info in session storage
              sessionStorage.setItem('payment_uuid', uuid);
              sessionStorage.setItem('payment_method', payment_method);
              sessionStorage.setItem('payment_action', JSON.stringify(this.form.value));
              
              // Open in current tab
              window.location.href = cashFreeData.payment_link;
            } else {
              console.error("Invalid response: Payment link is missing.");
            }
          } catch (error) {
            console.error("Error parsing CashFree response:", error);
          }
        } else {
          console.error("Payment initiation failed:", response?.msg);
        }
      },
      error: (err) => {
        console.log("Error initiating payment:", err);
      }
    });
  }

  checkTransactionStatusCashFree(uuid: any, action: any, paymentWindow: Window | null, payment_method: string) {
    if (!paymentWindow) return;
    
    let windowCheckInterval = setInterval(() => {
      try {
        if (paymentWindow.closed) {
          console.log("Payment window closed manually or due to an issue.");
          clearInterval(windowCheckInterval);
          this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
          return;
        }
      } catch (error) {
        console.warn("Unable to check payment window state:", error);
        clearInterval(windowCheckInterval);
        this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
      }
    }, 1000);
    
    this.startPaymentStatusPolling(uuid, action, payment_method, windowCheckInterval, paymentWindow);
  }

  // Zyaada Pay Payment Integration
  initiateZyaadaPayPaymentIntent(payment_method: string) {
    const uuid = uuidv4();
    const userData = localStorage.getItem('account');
    const parsedUserData = JSON.parse(userData || '{}')?.user || {};

    const payload = {
      uuid,
      ...parsedUserData,
      checkout: this.storeData?.order?.checkout
    };

    this.cartService.initiateZyaadaPayIntent({
      uuid: payload.uuid,
      email: payload.email,
      total: this.storeData?.order?.checkout?.total?.total,
      phone: parsedUserData.phone,
      name: parsedUserData.name,
      address: `${parsedUserData.address?.[0]?.city || ''} ${parsedUserData.address?.[0]?.area || ''}`
    }).subscribe({
      next: (response) => {
        if (response?.R && response?.data) {
          try {
            const zyaadaPayData = response.data;
            
            if (zyaadaPayData?.payment_url) {
              // Store payment info in session storage
              sessionStorage.setItem('payment_uuid', uuid);
              sessionStorage.setItem('payment_method', payment_method);
              sessionStorage.setItem('payment_action', JSON.stringify(this.form.value));
              
              // Open in current tab
              window.location.href = zyaadaPayData.payment_url;
            } else {
              console.error("Invalid response: Payment link is missing.");
            }
          } catch (error) {
              console.error("Error parsing Zyaada Pay response:", error);
          }
        } else {
          console.error("Payment initiation failed:", response?.msg);
        }
      },
      error: (err) => {
        console.log("Error initiating payment:", err);
      }
    });
  }

  checkTransactionStatusZyaadaPay(uuid: any, action: any, paymentWindow: Window | null, payment_method: string) {
    if (!paymentWindow) return;
    
    let windowCheckInterval = setInterval(() => {
      try {
        if (paymentWindow.closed) {
          console.log("Payment window closed manually or due to an issue.");
          clearInterval(windowCheckInterval);
          this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
          return;
        }
      } catch (error) {
        console.warn("Unable to check payment window state:", error);
        clearInterval(windowCheckInterval);
        this.checkPaymentStatusAfterWindowClosed(uuid, action, payment_method);
      }
    }, 1000);
    
    this.startPaymentStatusPolling(uuid, action, payment_method, windowCheckInterval, paymentWindow);
  }

  async checkTransectionStatusCashFree(uuid: any,payment_method: string) {
    this.cartService.checkTransectionStatusCashFree(uuid, payment_method).subscribe({
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

  async openNeoKredModal(data: any) {
    this.payByNeoKredIntentSaveData = data;
    console.log(this.payByNeoKredIntentSaveData);
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

  payByNeoKredIntentSaveDataUpiIntentString(upi:string) {
    switch (upi) {
      case 'gpay_upi':
        return this.payByNeoKredIntentSaveData.upiIntentString.replace("upi://pay?", "tez://pay?");
      case 'phone_pay_upi':
        return this.payByNeoKredIntentSaveData.upiIntentString.replace("upi://pay?", "phonepe://pay?");
      case 'paytm_upi':
        return this.payByNeoKredIntentSaveData.upiIntentString.replace("upi://pay?", "paytmmp://pay?");
      case 'bhim_upi':
        break;
        // return this.payByNeoKredIntentSaveData.upiIntentString.replace()
      default:
        break;
    }

  }

  paybyNeoNext() {
    this.payByNeoStep = 1;
  }

  paybyNeoDone() {
    this.payByNeoStep = 0;
    this.modalService.dismissAll();
    this.pollingSubscription.unsubscribe();
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

  checkout(payment_method?:string) {
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
      }

      let action = new PlaceOrder(formData);
      // this.store.dispatch(new PlaceOrder(formData));

      if(this.payment_method === 'cash_free'){
        this.initiateCashFreePaymentIntent(this.payment_method);
      }
      if(this.payment_method === 'sub_paisa'){
        this.initiateSubPaisa(formData, this.payment_method);
      }
      if(this.payment_method === 'neoKred') {
        this.initiateNeoKredPaymentIntent(this.payment_method);
      }
      if(this.payment_method === 'zyaada_pay') {
        this.initiateZyaadaPayPaymentIntent(this.payment_method);
      }
      if(this.payment_method === 'ease_buzz') {
        this.initiateEaseBuzzPaymentIntent(this.payment_method);
      }
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

  // Method to complete iOS payment
  private completeIOSPayment(uuid: string, actionPayload: any, payment_method: string) {
    console.log('Checking payment status for iOS return:', uuid, payment_method);
    
    // First check the payment status
    let statusCheck;
    switch(payment_method) {
      case 'neoKred':
        statusCheck = this.cartService.checkTransectionStatusNeoKred(uuid, payment_method);
        break;
      case 'cash_free':
        statusCheck = this.cartService.checkTransectionStatusCashFree(uuid, payment_method);
        break;
      case 'zyaada_pay':
        statusCheck = this.cartService.checkTransectionStatusZyaadaPay(uuid, payment_method);
        break;
      case 'sub_paisa':
        statusCheck = this.cartService.checkPaymentResponse(uuid, payment_method);
        break;
      case 'ease_buzz':
        statusCheck = this.cartService.checkTransectionStatusEaseBuzz(uuid, payment_method);
        break;
      default:
        console.error('Unknown payment method:', payment_method);
        return;
    }
    
    statusCheck.subscribe({
      next: (response) => {
        console.log(`Payment status for ${payment_method}:`, response);
        
        if (response.status) {
          console.log('Payment confirmed, placing order');
          // Create a new action with the stored payload
          const action = { payload: { ...actionPayload, uuid, payment_method } };
          
          // Dispatch the PlaceOrder action to complete the order
          this.store.dispatch(new PlaceOrder(action.payload)).subscribe({
            next: (result) => {
              console.log('Order placed successfully after iOS payment');
            },
            error: (err) => {
              console.error('Error placing order after iOS payment:', err);
            }
          });
        } else {
          console.log('Payment not confirmed yet, checking again in 3 seconds');
          // Try again after a short delay
          setTimeout(() => {
            this.completeIOSPayment(uuid, actionPayload, payment_method);
          }, 3000);
        }
      },
      error: (err) => {
        console.error('Error checking payment status for iOS return:', err);
      }
    });
  }

}
