import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
  selector: 'app-accessibility-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessibility-controls.component.html',
  styleUrls: ['./accessibility-controls.component.css']
})
export class AccessibilityControlsComponent {
  fontSize: number = 16;

  increaseFontSize() {
    this.fontSize += 2;
    document.body.style.fontSize = `${this.fontSize}px`;
  }
  decreaseFontSize() {
    this.fontSize -= 2;
    document.body.style.fontSize = `${this.fontSize}px`;
  }

  constructor(private appSettings: AppSettingsService) { }

  changeFontSize(direction: 'increase' | 'decrease') {
    this.appSettings.changeFontSize(direction);
  }

  toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
  }

  toggleDyslexicFont() {
    this.appSettings.toggleDyslexicFont();
  }
}