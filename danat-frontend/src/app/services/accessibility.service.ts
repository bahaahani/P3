import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {
  private fontSizeSubject = new BehaviorSubject<string>('medium');
  fontSize$ = this.fontSizeSubject.asObservable();

  private highContrastSubject = new BehaviorSubject<boolean>(false);
  highContrast$ = this.highContrastSubject.asObservable();

  constructor() {
    this.loadSettings();
  }

  setFontSize(size: string) {
    this.fontSizeSubject.next(size);
    localStorage.setItem('fontSize', size);
    document.body.style.fontSize = this.getFontSizeValue(size);
  }

  setHighContrast(enabled: boolean) {
    this.highContrastSubject.next(enabled);
    localStorage.setItem('highContrast', JSON.stringify(enabled));
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  private loadSettings() {
    const fontSize = localStorage.getItem('fontSize') || 'medium';
    const highContrast = JSON.parse(localStorage.getItem('highContrast') || 'false');
    this.setFontSize(fontSize);
    this.setHighContrast(highContrast);
  }

  private getFontSizeValue(size: string): string {
    switch (size) {
      case 'small': return '14px';
      case 'medium': return '16px';
      case 'large': return '18px';
      case 'x-large': return '20px';
      default: return '16px';
    }
  }
}