import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  footerLinks = [
    { name: 'About Us', url: '/about-us' },
    { name: 'Services', url: '/services' },
    { name: 'Research', url: '/research' },
    { name: 'Contact', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms of Service', url: '/terms-of-service' }
  ];

  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/danatbahrain', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', url: 'https://twitter.com/danatbahrain', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: 'https://instagram.com/danatbahrain', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/danatbahrain', icon: 'fab fa-linkedin-in' }
  ];
}