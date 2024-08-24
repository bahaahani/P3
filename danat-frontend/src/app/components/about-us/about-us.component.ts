import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../gallery/gallery.component';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, GalleryComponent, MegaMenuComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  coreValues = [
    { icon: 'fas fa-gem', title: 'Excellence', description: 'We strive for excellence in all our services and research.' },
    { icon: 'fas fa-handshake', title: 'Integrity', description: 'We maintain the highest standards of integrity in our work.' },
    { icon: 'fas fa-lightbulb', title: 'Innovation', description: 'We continuously innovate to advance the field of gemology.' },
    { icon: 'fas fa-globe', title: 'Sustainability', description: 'We are committed to sustainable and ethical practices.' }
  ];

  teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'CEO', image: 'assets/images/team/sarah-johnson.jpg', bio: 'Dr. Johnson has over 20 years of experience in gemology and leads DANAT with a vision for innovation and excellence.' },
    { name: 'Ahmed Al-Mansoor', role: 'Head of Research', image: 'assets/images/team/ahmed-al-mansoor.jpg', bio: 'Ahmed spearheads our cutting-edge research initiatives, pushing the boundaries of gemological science.' },
    { name: 'Emma Chen', role: 'Lead Gemologist', image: 'assets/images/team/emma-chen.jpg', bio: 'Emma\'s expertise in pearl and gemstone authentication is unparalleled in the industry.' },
    { name: 'Mohammed Al-Khalifa', role: 'Director of Education', image: 'assets/images/team/mohammed-al-khalifa.jpg', bio: 'Mohammed develops our world-class educational programs, nurturing the next generation of gemologists.' }
  ];

  services = [
    { icon: 'fas fa-certificate', title: 'Authentication', description: 'Expert gemstone and pearl authentication services.' },
    { icon: 'fas fa-microscope', title: 'Research', description: 'Advanced gemological research and analysis.' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Education', description: 'Comprehensive educational programs and workshops.' },
    { icon: 'fas fa-comments', title: 'Consultancy', description: 'Professional consultancy services for the jewelry industry.' }
  ];

  partners = [
    { name: 'Gemological Institute of America (GIA)', logo: 'assets/images/partners/gia-logo.png' },
    { name: 'International Gemological Institute (IGI)', logo: 'assets/images/partners/igi-logo.png' },
    { name: 'World Jewellery Confederation (CIBJO)', logo: 'assets/images/partners/cibjo-logo.png' },
    { name: 'Responsible Jewellery Council (RJC)', logo: 'assets/images/partners/rjc-logo.png' }
  ];
}