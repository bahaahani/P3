import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { LiveChatComponent } from './components/live-chat/live-chat.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { AccessibilityControlsComponent } from './components/accessibility-controls/accessibility-controls.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppSettingsService } from './services/app-settings.service';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { LoadingService } from './services/loading.service';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MegaMenuComponent,
    LiveChatComponent,
    LanguageSelectorComponent,
    AccessibilityControlsComponent,
    FooterComponent,
    LoadingIndicatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  private appSettings = inject(AppSettingsService);
  private loadingService = inject(LoadingService);

  ngOnInit() {
    // Show loading indicator for at least 1 second
    this.loadingService.setLoading(true);
    timer(1000).pipe(take(1)).subscribe(() => {
      this.loadingService.setLoading(false);
    });

    this.loadingService.isLoading$.subscribe(
      (isLoading: boolean) => {
        this.isLoading = isLoading;
      }
    );

    // Existing subscriptions
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