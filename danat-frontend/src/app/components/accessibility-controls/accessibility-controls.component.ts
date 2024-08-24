import { Component, OnInit } from '@angular/core';
import { AccessibilityService } from '../../services/accessibility.service';

@Component({
  selector: 'app-accessibility-controls',
  templateUrl: './accessibility-controls.component.html',
  styleUrls: ['./accessibility-controls.component.css']
})
export class AccessibilityControlsComponent implements OnInit {
  fontSize!: string;
  highContrast!: boolean;

  constructor(private accessibilityService: AccessibilityService) { }

  ngOnInit(): void {
    this.accessibilityService.fontSize$.subscribe(size => this.fontSize = size);
    this.accessibilityService.highContrast$.subscribe(enabled => this.highContrast = enabled);
  }

  changeFontSize(size: string): void {
    this.accessibilityService.setFontSize(size);
  }

  toggleHighContrast(): void {
    this.accessibilityService.setHighContrast(!this.highContrast);
  }
}