import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent {
  menuItems = [
    {
      title: 'Education',
      items: [
        { name: 'Gemology Courses', link: '/education/gemology' },
        { name: 'Pearl Diving Courses', link: '/education/pearl-diving' },
        { name: 'Jewelry Design Courses', link: '/education/jewelry-design' }
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'Gemstone Testing', link: '/services/gemstone-testing' },
        { name: 'Pearl Authentication', link: '/services/pearl-authentication' },
        { name: 'Jewelry Appraisal', link: '/services/jewelry-appraisal' }
      ]
    },
    {
      title: 'Research',
      items: [
        { name: 'Gemstone Research', link: '/research/gemstone' },
        { name: 'Pearl Research', link: '/research/pearl' },
        { name: 'Jewelry Research', link: '/research/jewelry' }
      ]
    },
    {
      title: 'Events',
      items: [
        { name: 'Gemstone Events', link: '/events/gemstone' },
        { name: 'Pearl Events', link: '/events/pearl' },
        { name: 'Jewelry Events', link: '/events/jewelry' }
      ]
    },
    {
      title: 'Press',
      items: [
        { name: 'Gemstone Press', link: '/press/gemstone' },
        { name: 'Pearl Press', link: '/press/pearl' },
        { name: 'Jewelry Press', link: '/press/jewelry' }
      ]
    },
    {
      title: 'Contact Us',
      items: [
        { name: 'Gemstone Contact', link: '/contact-us/gemstone' },
        { name: 'Pearl Contact', link: '/contact-us/pearl' },
        { name: 'Jewelry Contact', link: '/contact-us/jewelry' }
      ]
    }
  ];
}