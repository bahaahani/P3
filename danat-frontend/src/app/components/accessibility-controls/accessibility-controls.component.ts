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


  constructor(private appSettings: AppSettingsService) { }

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