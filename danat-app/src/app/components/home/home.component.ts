import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { AccessibilityControlsComponent } from '../accessibility-controls/accessibility-controls.component';
import { LiveChatComponent } from '../live-chat/live-chat.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, MegaMenuComponent, LanguageSelectorComponent, AccessibilityControlsComponent, LiveChatComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    featuredCourses = [
        { title: 'Introduction to Gemology', description: 'Learn the basics of gemstone identification and grading.', image: 'assets/images/gemology.jpg' },
        { title: 'Advanced Pearl Grading', description: 'Master the art of evaluating and grading pearls.', image: 'assets/images/pearl-grading.jpg' },
        { title: 'Jewelry Design Fundamentals', description: 'Explore the principles of creating stunning jewelry pieces.', image: 'assets/images/jewelry-design.jpg' },
    ];

    testimonials = [
        { name: 'Sarah J.', text: 'DANAT\'s courses have been instrumental in advancing my career in the gemology field.', role: 'Gemologist' },
        { name: 'Ahmed M.', text: 'The pearl grading course gave me invaluable insights into the industry standards.', role: 'Pearl Trader' },
    ];
}