import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent {
  message: string = 'Your registration was successful!';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }
}