import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    course: ['', Validators.required],
    // Add more form fields as needed
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission
      console.log(this.registrationForm.value);
    }
  }
}