import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ResearchArea {
  title: string;
  description: string;
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
}

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  researchAreas: ResearchArea[] = [
    {
      title: 'Gemstone Identification Techniques',
      description: 'Developing advanced methods for accurate gemstone identification using spectroscopy and other non-destructive techniques.'
    },
    {
      title: 'Pearl Cultivation and Quality Assessment',
      description: 'Investigating factors affecting pearl quality and developing new cultivation methods to improve pearl production.'
    },
    {
      title: 'Jewelry Design and Manufacturing Technologies',
      description: 'Exploring innovative design techniques and manufacturing processes for creating unique and high-quality jewelry.'
    }
  ];

  publications: Publication[] = [
    {
      title: 'Advanced Spectroscopic Methods for Gemstone Identification',
      authors: 'Smith, J., Johnson, A., and Williams, M.',
      journal: 'Journal of Gemology',
      year: 2022,
      link: 'https://example.com/publication1'
    },
    {
      title: 'Factors Affecting Pearl Quality in Cultured Pearls',
      authors: 'Brown, L., Davis, R., and Miller, S.',
      journal: 'Pearl Research Quarterly',
      year: 2021,
      link: 'https://example.com/publication2'
    },
    {
      title: '3D Printing Applications in Jewelry Design',
      authors: 'Taylor, E., Anderson, K., and Lee, C.',
      journal: 'International Journal of Jewelry Science',
      year: 2023,
      link: 'https://example.com/publication3'
    }
  ];
}