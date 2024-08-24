import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { AccessibilityControlsComponent } from '../accessibility-controls/accessibility-controls.component';

@Component({
    selector: 'app-mega-menu',
    standalone: true,
    imports: [CommonModule, RouterModule, LanguageSelectorComponent],
    templateUrl: './mega-menu.component.html',
    styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent {
    menuItems = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About Us',
            link: '/about-us',
            subItems: [
                { name: 'Our History', link: '/about-us/history' },
                { name: 'Mission & Vision', link: '/about-us/mission-vision' },
                { name: 'Team & Leadership', link: '/about-us/team' }
            ]
        },
        {
            title: 'Programs',
            link: '/programs',
            subItems: [
                { name: 'Gemology Courses', link: '/programs/gemology' },
                { name: 'Pearl Diving Courses', link: '/programs/pearl-diving' },
                { name: 'Jewelry Design Courses', link: '/programs/jewelry-design' },
                { name: 'Research Programs', link: '/programs/research' }
            ]
        },
        {
            title: 'Services',
            link: '/services',
            subItems: [
                { name: 'Gemstone Testing', link: '/services/gemstone-testing' },
                { name: 'Pearl Authentication', link: '/services/pearl-authentication' },
                { name: 'Jewelry Appraisal', link: '/services/jewelry-appraisal' },
                { name: 'Consultancy', link: '/services/consultancy' }
            ]
        },
        {
            title: 'Get in Touch',
            link: '/contact',
            subItems: [
                { name: 'Contact Us', link: '/contact/general' },
                { name: 'Events', link: '/contact/events' },
                { name: 'Press Inquiries', link: '/contact/press' }
            ]
        },
        {
            title: 'Registration',
            link: '/registration',
        }
    ];
}