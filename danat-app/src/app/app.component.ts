import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { LiveChatComponent } from './components/live-chat/live-chat.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { AccessibilityControlsComponent } from './components/accessibility-controls/accessibility-controls.component';
import { AppSettingsService } from './services/app-settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MegaMenuComponent,
    LiveChatComponent,
    LanguageSelectorComponent,
    AccessibilityControlsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appSettings: AppSettingsService) {}

  ngOnInit() {
    this.appSettings.fontSize$.subscribe(size => {
      document.documentElement.style.setProperty('--base-font-size', `${size}px`);
    });

    this.appSettings.highContrast$.subscribe(highContrast => {
      if (highContrast) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });

    this.appSettings.dyslexicFont$.subscribe(dyslexicFont => {
      if (dyslexicFont) {
        document.body.classList.add('dyslexic-font');
      } else {
        document.body.classList.remove('dyslexic-font');
      }
    });
  }
}