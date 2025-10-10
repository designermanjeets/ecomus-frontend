import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetPaymentDetails, UpdatePaymentDetails } from '../../../shared/action/payment-details.action';
import { PaymentDetailsState } from '../../../shared/state/payment-details.state';
import { PaymentDetails } from '../../../shared/interface/payment-details.interface';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent {

  @Select(PaymentDetailsState.paymentDetails) paymentDetails$: Observable<PaymentDetails>;
  
  public form: FormGroup;
  public active = 'bank';

  constructor(private store: Store) {
    this.form = new FormGroup({
      bank_account_no: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      bank_name: new FormControl('', [Validators.pattern(/^[A-Za-z\s]*$/)]),
      bank_holder_name: new FormControl('', [Validators.pattern(/^[A-Za-z\s]*$/)]),
      swift: new FormControl(),
      ifsc: new FormControl(),
      paypal_email: new FormControl('', [Validators.email]),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPaymentDetails());
    this.paymentDetails$.subscribe(paymentDetails => {
      this.form.patchValue({
        bank_account_no: paymentDetails?.bank_account_no,
        bank_name: paymentDetails?.bank_name,
        bank_holder_name: paymentDetails?.bank_holder_name,
        swift:paymentDetails?.swift,
        ifsc: paymentDetails?.ifsc,
        paypal_email: paymentDetails?.paypal_email
      })
    });
  }

  submit(){    
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.store.dispatch(new UpdatePaymentDetails(this.form.value))
    }
  }

  // Input guards: shared helpers
  allowOnlyDigits(event: KeyboardEvent): void {
    const allowedControlKeys = [
      'Backspace','Delete','Tab','Enter','Escape','ArrowLeft','ArrowRight','Home','End'
    ];
    if (allowedControlKeys.includes(event.key)) return;
    if (event.ctrlKey || event.metaKey) return;
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }

  sanitizeDigitsInput(event: Event, controlName: 'bank_account_no'): void {
    const input = event.target as HTMLInputElement;
    const digitsOnly = (input.value || '').replace(/\D/g, '');
    if (digitsOnly !== input.value) {
      input.value = digitsOnly;
      this.form.controls[controlName].setValue(digitsOnly, { emitEvent: false });
    }
  }

  sanitizeDigitsPaste(event: ClipboardEvent): void {
    const pasted = event.clipboardData?.getData('text') ?? '';
    if (/\D/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/\D/g, '');
      document.execCommand('insertText', false, sanitized);
    }
  }

  allowOnlyLetters(event: KeyboardEvent): void {
    const allowedControlKeys = [
      'Backspace','Delete','Tab','Enter','Escape','ArrowLeft','ArrowRight','Home','End'
    ];
    if (allowedControlKeys.includes(event.key)) return;
    if (/^[A-Za-z\s]$/.test(event.key)) return;
    event.preventDefault();
  }

  sanitizeLettersInput(event: Event, controlName: 'bank_name' | 'bank_holder_name'): void {
    const input = event.target as HTMLInputElement;
    const sanitized = (input.value || '').replace(/[^A-Za-z\s]/g, '');
    if (sanitized !== input.value) {
      input.value = sanitized;
      this.form.controls[controlName].setValue(sanitized, { emitEvent: false });
    }
  }

  sanitizeLettersPaste(event: ClipboardEvent): void {
    const pasted = event.clipboardData?.getData('text') ?? '';
    if (/[^A-Za-z\s]/.test(pasted)) {
      event.preventDefault();
      const sanitized = pasted.replace(/[^A-Za-z\s]/g, '');
      document.execCommand('insertText', false, sanitized);
    }
  }

}
