import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      name: 'Gemstone Testing',
      description: 'Our state-of-the-art laboratory provides comprehensive gemstone testing and certification services.',
      features: [
        'Identification of natural, synthetic, and treated gemstones',
        'Detailed grading reports for diamonds and colored stones',
        'Advanced spectroscopic analysis'
      ]
    },
    {
      name: 'Pearl Authentication',
      description: 'As experts in pearl authentication, we offer reliable testing and certification for all types of pearls.',
      features: [
        'Differentiation between natural and cultured pearls',
        'Origin determination for natural pearls',
        'Quality grading for pearls'
      ]
    },
    {
      name: 'Jewelry Appraisal',
      description: 'Our expert appraisers provide accurate and detailed valuations for all types of jewelry.',
      features: [
        'Insurance appraisals',
        'Estate valuations',
        'Retail replacement valuations'
      ]
    },
    {
      name: 'Consultancy',
      description: 'We offer professional consultancy services to individuals and businesses in the gem and jewelry industry.',
      features: [
        'Market analysis and trend forecasting',
        'Sourcing and supply chain optimization',
        'Custom training programs for industry professionals'
      ]
    }
  ];
}