import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loading-indicator',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="loading-indicator">
      <!-- Add your loading indicator HTML here -->
      <div class="spinner"></div>
    </div>
  `,
    styles: [`
    .loading-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoadingIndicatorComponent { }