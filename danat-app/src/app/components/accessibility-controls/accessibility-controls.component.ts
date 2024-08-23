import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
  selector: 'app-accessibility-controls',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="accessibility-controls">
      <button (click)="changeFontSize('increase')">A+</button>
      <button (click)="changeFontSize('decrease')">A-</button>
      <button (click)="toggleHighContrast()">Toggle High Contrast</button>
    </div>
  `,
  styles: [`
    .accessibility-controls {
      margin: 1rem;
    }
    button {
      margin-right: 0.5rem;
    }
  `]
})
export class AccessibilityControlsComponent {
  constructor(private appSettings: AppSettingsService) {}

  changeFontSize(direction: 'increase' | 'decrease') {
    this.appSettings.changeFontSize(direction);
  }

  toggleHighContrast() {
    this.appSettings.toggleHighContrast();
  }
}