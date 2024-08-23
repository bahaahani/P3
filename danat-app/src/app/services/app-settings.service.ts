import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private languageSubject = new BehaviorSubject<string>('en');
  private fontSizeSubject = new BehaviorSubject<number>(16);
  private highContrastSubject = new BehaviorSubject<boolean>(false);

  language$ = this.languageSubject.asObservable();
  fontSize$ = this.fontSizeSubject.asObservable();
  highContrast$ = this.highContrastSubject.asObservable();

  setLanguage(lang: string) {
    this.languageSubject.next(lang);
  }

  changeFontSize(direction: 'increase' | 'decrease') {
    const currentSize = this.fontSizeSubject.value;
    const newSize = direction === 'increase' ? currentSize + 2 : currentSize - 2;
    this.fontSizeSubject.next(newSize);
  }

  toggleHighContrast() {
    this.highContrastSubject.next(!this.highContrastSubject.value);
  }
}