import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  imageUrl: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Al-Mahmood',
      role: 'Graduate',
      company: 'DANAT Institute',
      quote: 'The gemology program at DANAT provided me with invaluable knowledge and hands-on experience. It has been instrumental in launching my career in the jewelry industry.',
      imageUrl: 'assets/images/testimonials/sarah-al-mahmood.jpg'
    },
    {
      id: 2,
      name: 'Ahmed Al-Khalifa',
      role: 'CEO',
      company: 'Bahrain Jewelers Association',
      quote: 'DANAT\'s expertise and state-of-the-art facilities have significantly elevated the standards of gemstone and pearl authentication in Bahrain.',
      imageUrl: 'assets/images/testimonials/ahmed-al-khalifa.jpg'
    },
    {
      id: 3,
      name: 'Emma Chen',
      role: 'Research Partner',
      company: 'Global Gemological Institute',
      quote: 'Collaborating with DANAT on pearl research has been a rewarding experience. Their commitment to scientific excellence is truly commendable.',
      imageUrl: 'assets/images/testimonials/emma-chen.jpg'
    }
  ];
}