import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('cardElement') cardElement: ElementRef;

  paymentForm: FormGroup;
  loading = false;
  success = false;
  error: string = null;
  cardErrors: string = null;
  stripe: any;
  card: any;

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    });

    this.stripe = this.paymentService.getStripe();
    this.setupStripeElements();
  }

  setupStripeElements() {
    const elements = this.stripe.elements();
    this.card = elements.create('card');
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

  async onSubmit() {
    if (this.paymentForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      // Create PaymentIntent
      const { clientSecret } = await this.paymentService.createPaymentIntent(this.paymentForm.get('amount').value * 100).toPromise();

      // Create PaymentMethod
      const { paymentMethod, error } = await this.paymentService.createPaymentMethod(this.card);

      if (error) {
        throw new Error(error.message);
      }

      // Confirm Payment
      const { error: confirmError } = await this.paymentService.confirmCardPayment(clientSecret, paymentMethod.id);

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      this.success = true;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
}