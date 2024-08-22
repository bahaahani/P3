import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (title) {
      <h1>{{ title }}</h1>
    }
    <!-- Add more content here -->
  `,
  styles: [`
    /* Component styles */
  `]
})
export class HomeComponent {
  title = 'Welcome to DANAT';
}