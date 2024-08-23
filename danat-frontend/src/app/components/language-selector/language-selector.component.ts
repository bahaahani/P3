import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
    selector: 'app-language-selector',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex items-center">
      <span class="text-sm font-medium mr-2">Language:</span>
      <select (change)="changeLanguage($event)" [value]="selectedLanguage">
        <option *ngFor="let language of languages" [value]="language.code">{{ language.name }}</option>
      </select>
    </div>
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
    languages = [
      { code: 'en', name: 'English' },
      { code: 'ar', name: 'العربية' },
      { code: 'fr', name: 'Français' }
    ];

    selectedLanguage = 'en';

    constructor(private appSettings: AppSettingsService) {
        this.appSettings.language$.subscribe(lang => {
            this.selectedLanguage = lang;
        });
    }

    changeLanguage(event: Event) {
        const selectedLanguage = (event.target as HTMLSelectElement).value;
        this.appSettings.setLanguage(selectedLanguage);
    }
}