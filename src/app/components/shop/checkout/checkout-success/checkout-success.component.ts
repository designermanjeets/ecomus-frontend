import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription, map, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { delay, switchMap, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { Breadcrumb } from '../../../../shared/interface/breadcrumb';
import { OrderService } from '../../../../shared/services/order.service';
import { CartService } from '../../../../shared/services/cart.service';
import { GetSettingOption } from '../../../../shared/action/setting.action';
import { DeliveryBlock } from '../../../../shared/interface/setting.interface';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent {

  private destroy$ = new Subject<void>();

  public breadcrumb: Breadcrumb = {
    title: "Checkout",
    items: [{ label: 'Checkout', active: true }]
  }
 
  public form: FormGroup;
  public coupon: boolean = true;
  public couponCode: string;
  public appliedCoupon: boolean = false;
  public couponError: string | null;
  public loading: boolean = false;

  public shippingStates$: Observable<Select2Data>;
  public billingStates$: Observable<Select2Data>;

  public formData!: any;

  private pollingSubscription!: Subscription;
  private pollingInterval = 5000; // Poll every 5 seconds

  order_status: boolean;

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
        private orderService: OrderService,
        private route: ActivatedRoute
      ) {


    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(params => {
        this.order_status = params['order_status'];
        console.log(this.order_status);
      });
    
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
    this.products();
  }

  products() {
    //
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }

  selectShippingAddress(id: number) {
    if(id) {
      this.form.controls['shipping_address_id'].setValue(Number(id));
    }
  }

  selectBillingAddress(id: number) {
    if(id) {
      this.form.controls['billing_address_id'].setValue(Number(id));
    }
  }

  selectDelivery(value: DeliveryBlock) {
    this.form.controls['delivery_description'].setValue(value?.delivery_description);
    this.form.controls['delivery_interval'].setValue(value?.delivery_interval);
  }

  selectPaymentMethod(value: string) {
    this.form.controls['payment_method'].setValue(value);
    // this.checkout();
    switch (value) {
      case 'payment_by_qr':
        // Call Popup for QR Code
        this.openModal();
        break;
      case 'sub_paisa':
        // this.openModal();
        break;  
      default:
        break;
    }
  }

  initiateSubPaisa() {
    // this.cartService.initiateSubPaisa().subscribe({
    //   next: (data) => {
    //     if (data) {
    //       this.formData = this.sanitizer.bypassSecurityTrustHtml(data?.data);
    //       const container = document.getElementById('paymentContainer');
    //       if (container) {
    //         container.innerHTML = data.data;
    //         const form = container.querySelector('form') as HTMLFormElement;
    //         setTimeout(() => {
    //           form.setAttribute('target', '_blank');
    //           const submitButton = container.querySelector('#submitButton') as HTMLInputElement;
    //           if(submitButton) {
    //             submitButton.click();
    //             this.startPollingForPaymentStatus(); 
    //           }
    //         }, 1000);
    //       }
    //     }
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // }); // Call Sub Paisa API
  }

  startPollingForPaymentStatus() {
    this.pollingSubscription = interval(this.pollingInterval)
      .pipe(
        delay(10000),
        switchMap(() => this.cartService.checkPaymentResponse({})), // Ensure it returns an Observable<{ paymentCompleted: boolean }>
        takeWhile((response: { paymentCompleted: boolean }) => !response.paymentCompleted, true) // Stop when payment is completed
      )
      .subscribe({
        next: (response) => {
          console.log('Payment Status:', response);
          if (response.paymentCompleted) {
            this.pollingSubscription.unsubscribe(); // Stop polling
            this.handlePaymentSuccess(response);
          }
        },
        error: (err) => {
          console.error('Error checking payment status:', err);
        }
      });
  }

  handlePaymentSuccess(response: any) {
    console.log('Payment was successful:', response);
    alert('Payment Successful! Redirecting...');
  }

  async checkPaymentResponse() {
    // this.cartService.checkPaymentResponse().subscribe({
    //   next:(data) => {
    //     console.log(data);
    //   },
    //   error:(err) => {
    //     console.log(err);
    //   }
    // });
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
    // this.modalService.open(this.payByQRModal, {
    //   ariaLabelledBy: 'address-add-Modal',
    //   centered: true,
    //   windowClass: 'theme-modal modal-lg address-modal'
    // }).result.then((result) => {
    //   `Result ${result}`
    //   const formDataContainer = document.getElementById('formDataContainer');
    //   console.log(formDataContainer);
    // }, (reason) => {
    //   const formDataContainer = document.getElementById('formDataContainer');
    //   console.log(formDataContainer);
    // });
  }


  togglePoint(event: Event) {
    this.form.controls['points_amount'].setValue((<HTMLInputElement>event.target)?.checked);
  }

  toggleWallet(event: Event) {
    this.form.controls['wallet_balance'].setValue((<HTMLInputElement>event.target)?.checked);
  }

  showCoupon() {
    this.coupon = true;
  }

  setCoupon(value?: string) {
    //
  }

  couponRemove() {
    this.setCoupon();
  }

  clearCart(){
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
