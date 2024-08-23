import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
  selector: 'app-accessibility-controls',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="accessibility-controls">
      <button (click)="changeFontSize('increase')" aria-label="Increase font size">A+</button>
      <button (click)="changeFontSize('decrease')" aria-label="Decrease font size">A-</button>
      <button (click)="toggleHighContrast()" aria-label="Toggle high contrast mode">
      </button>
      <button (click)="toggleDyslexicFont()" aria-label="Toggle dyslexic-friendly font">
      </button>
    </div>
  `,
  styles: [`
    .accessibility-controls {
      margin: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: var(--secondary-color);
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

  toggleDyslexicFont() {
    this.appSettings.toggleDyslexicFont();
  }
}