import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { AccessibilityControlsComponent } from '../accessibility-controls/accessibility-controls.component';
import { LiveChatComponent } from '../live-chat/live-chat.component';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, MegaMenuComponent, LanguageSelectorComponent, AccessibilityControlsComponent, LiveChatComponent, LoadingIndicatorComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    isLoading = true;
    featuredCourses = [
        {
            title: 'Introduction to Gemology',
            description: 'Learn the basics of gemstone identification and grading.',
            image: 'assets/images/gemology-course.jpg',
            link: '/courses/gemology'
        },
        {
            title: 'Pearl Diving Certification',
            description: 'Master the art of pearl diving and underwater techniques.',
            image: 'assets/images/pearl-diving-course.jpg',
            link: '/courses/pearl-diving'
        },
        {
            title: 'Jewelry Design Fundamentals',
            description: 'Discover the principles of creating stunning jewelry pieces.',
            image: 'assets/images/jewelry-design-course.jpg',
            link: '/courses/jewelry-design'
        }
    ];

    testimonials = [
        { name: 'Sarah J.', text: 'DANAT\'s courses have been instrumental in advancing my career in the gemology field.', role: 'Gemologist' },
        { name: 'Ahmed M.', text: 'The pearl grading course gave me invaluable insights into the industry standards.', role: 'Pearl Trader' },
        { name: 'Emma C.', text: 'As a jewelry designer, the insights I gained from DANAT\'s courses have been invaluable in my creative process.', role: 'Independent Jewelry Designer' }
    ];

    latestNews = [
        {
            title: 'DANAT Launches New Advanced Gemology Course',
            date: '2023-05-15',
            summary: 'Our new course offers in-depth training on the latest gemstone identification techniques.',
            link: '/news/new-gemology-course'
        },
        {
            title: 'DANAT Partners with International Gemological Institute',
            date: '2023-05-01',
            summary: 'This partnership will enhance our global reach and provide new opportunities for our students.',
            link: '/news/igi-partnership'
        },
        {
            title: 'Upcoming Jewelry Design Workshop',
            date: '2023-04-20',
            summary: 'Join us for a two-day intensive workshop on contemporary jewelry design techniques.',
            link: '/events/jewelry-design-workshop'
        }
    ];

    latestResearch = [
        {
            title: 'New Method for Pearl Authentication',
            authors: 'Dr. Sarah Johnson, Dr. Ahmed Al-Mansoor',
            date: '2023-05-20',
            summary: 'A groundbreaking technique using spectroscopy for rapid and accurate pearl authentication.',
            link: '/research/pearl-authentication-method'
        },
        {
            title: 'Gemstone Formation in Bahrain: A Geological Study',
            authors: 'Prof. Emma Chen, Dr. Mohammed Al-Khalifa',
            date: '2023-04-15',
            summary: 'An in-depth analysis of the geological conditions leading to gemstone formation in Bahrain.',
            link: '/research/bahrain-gemstone-formation'
        },
        {
            title: 'Sustainable Practices in Pearl Diving',
            authors: 'Dr. John Smith, Fatima Al-Sayed',
            date: '2023-03-10',
            summary: 'Exploring eco-friendly methods for pearl diving to preserve marine ecosystems.',
            link: '/research/sustainable-pearl-diving'
        }
    ];

    partners = [
        { name: 'Gemological Institute of America (GIA)', logo: 'assets/images/partners/gia-logo.png' },
        { name: 'International Gemological Institute (IGI)', logo: 'assets/images/partners/igi-logo.png' },
        { name: 'World Jewellery Confederation (CIBJO)', logo: 'assets/images/partners/cibjo-logo.png' },
        { name: 'Responsible Jewellery Council (RJC)', logo: 'assets/images/partners/rjc-logo.png' }
    ];

    ngOnInit() {
        // Simulate loading process
        setTimeout(() => {
            this.isLoading = false;
            console.log('Loading complete'); // Add this line for debugging
        }, 2000); // Show loading for 2 seconds
    }
}