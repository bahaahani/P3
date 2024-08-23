import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
    selector: 'app-language-selector',
    standalone: true,
    imports: [CommonModule],
    template: `
    <select (change)="changeLanguage($event)" [value]="currentLanguage">
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  `,
    styles: [`
    select {
      padding: 0.5rem;
      margin: 1rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `]
})
export class LanguageSelectorComponent {
    currentLanguage: string = 'en';

    constructor(private appSettings: AppSettingsService) {
        this.appSettings.language$.subscribe(lang => {
            this.currentLanguage = lang;
        });
    }

    changeLanguage(event: Event) {
        const selectedLanguage = (event.target as HTMLSelectElement).value;
        this.appSettings.setLanguage(selectedLanguage);
    }
}