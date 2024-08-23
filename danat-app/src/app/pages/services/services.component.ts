import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      name: 'Lab Testing',
      description: 'State-of-the-art gemstone and pearl testing services using advanced technology.',
      icon: 'fa-flask'
    },
    {
      name: 'Appraisal Services',
      description: 'Expert valuation of gemstones, pearls, and jewelry for various purposes.',
      icon: 'fa-balance-scale'
    },
    {
      name: 'Education and Training',
      description: 'Comprehensive courses and workshops for aspiring gemologists and industry professionals.',
      icon: 'fa-graduation-cap'
    },
    {
      name: 'Consultancy Services',
      description: 'Professional advice on gemstone and pearl-related matters for businesses and individuals.',
      icon: 'fa-comments'
    },
    {
      name: 'Research and Development',
      description: 'Cutting-edge research to advance the field of gemology and pearl science.',
      icon: 'fa-microscope'
    }
  ];
}