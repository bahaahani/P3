import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PressRelease {
  id: number;
  title: string;
  date: Date;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent {
  pressReleases: PressRelease[] = [
    {
      id: 1,
      title: 'DANAT Announces New Advanced Gemstone Testing Technology',
      date: new Date('2023-05-15'),
      summary: 'DANAT introduces cutting-edge spectroscopic technology for more accurate gemstone identification and grading.',
      link: 'https://example.com/press-release-1'
    },
    {
      id: 2,
      title: 'DANAT Partners with International Gemological Institute',
      date: new Date('2023-04-02'),
      summary: 'A new partnership aims to enhance gemological education and research opportunities in the Middle East.',
      link: 'https://example.com/press-release-2'
    },
    {
      id: 3,
      title: 'DANAT Hosts Annual Gemstone Symposium',
      date: new Date('2023-03-10'),
      summary: 'Leading experts gather to discuss the latest trends and innovations in the gemstone industry.',
      link: 'https://example.com/press-release-3'
    }
  ];
}