import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'CEO', image: 'assets/images/team/sarah-johnson.jpg' },
    { name: 'Ahmed Al-Mansoor', role: 'Head of Research', image: 'assets/images/team/ahmed-al-mansoor.jpg' },
    { name: 'Emma Chen', role: 'Lead Gemologist', image: 'assets/images/team/emma-chen.jpg' },
    { name: 'Mohammed Al-Khalifa', role: 'Director of Education', image: 'assets/images/team/mohammed-al-khalifa.jpg' }
  ];

  partners = [
    { name: 'Gemological Institute of America (GIA)', logo: 'assets/images/partners/gia-logo.png' },
    { name: 'International Gemological Institute (IGI)', logo: 'assets/images/partners/igi-logo.png' },
    { name: 'World Jewellery Confederation (CIBJO)', logo: 'assets/images/partners/cibjo-logo.png' },
    { name: 'Responsible Jewellery Council (RJC)', logo: 'assets/images/partners/rjc-logo.png' }
  ];
}