import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private stripe: any;

  constructor(private http: HttpClient) {
    this.stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY'); // Replace with your Stripe publishable key
  }

  createPaymentIntent(amount: number): Observable<any> {
    return this.http.post('/api/create-payment-intent', { amount });
  }

  confirmCardPayment(clientSecret: string, payment_method: string): Promise<any> {
    return this.stripe.confirmCardPayment(clientSecret, {
      payment_method: payment_method
    });
  }

  createPaymentMethod(cardElement: any): Promise<any> {
    return this.stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });
  }

  getStripe(): any {
    return this.stripe;
  }
}