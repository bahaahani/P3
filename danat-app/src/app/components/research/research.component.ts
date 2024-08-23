import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  researchAreas = [
    {
      title: 'Gemstone Analysis',
      description: 'Advanced techniques for identifying and characterizing gemstones.',
      projects: [
        'Development of non-destructive testing methods for rare gemstones',
        'Spectroscopic analysis of treated vs. natural gemstones',
        'Machine learning applications in gemstone classification'
      ]
    },
    {
      title: 'Pearl Research',
      description: 'Comprehensive studies on pearl formation, identification, and grading.',
      projects: [
        'Genetic factors influencing pearl quality in cultured pearls',
        'Environmental impact on natural pearl formation in the Arabian Gulf',
        'Advanced imaging techniques for pearl structure analysis'
      ]
    },
    {
      title: 'Jewelry Technology',
      description: 'Innovative approaches to jewelry design, manufacturing, and authentication.',
      projects: [
        '3D printing applications in custom jewelry design',
        'Development of anti-counterfeiting measures for high-value jewelry',
        'Sustainable practices in jewelry manufacturing'
      ]
    }
  ];

  publications = [
    {
      title: 'Advancements in Pearl Authentication Techniques',
      authors: 'Dr. Sarah Johnson, Dr. Ahmed Al-Mansoor',
      journal: 'Journal of Gemology',
      date: '2023'
    },
    {
      title: 'Spectroscopic Analysis of Heat-Treated Sapphires',
      authors: 'Prof. Emma Chen, Dr. Mohammed Al-Khalifa',
      journal: 'Gems & Gemology',
      date: '2022'
    },
    {
      title: 'Sustainable Practices in Pearl Farming: A Case Study in Bahrain',
      authors: 'Dr. John Smith, Fatima Al-Sayed',
      journal: 'Sustainability in Aquaculture',
      date: '2022'
    }
  ];
}