import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(): void {
    // Add form submission logic here
    console.log('Form submitted:', this.name, this.email, this.message);
  }
}