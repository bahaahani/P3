import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NewsItem {
  title: string;
  date: string;
  summary: string;
  link: string;
}

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-news-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent {
  newsItems: NewsItem[] = [
    {
      title: 'DANAT Unveils New Pearl Authentication Technology',
      date: '2023-05-15',
      summary: 'DANAT introduces a groundbreaking method for authenticating pearls using advanced spectroscopy.',
      link: '/news/new-pearl-authentication-tech'
    },
    {
      title: 'DANAT Researchers Publish Findings on Rare Gemstone',
      date: '2023-04-22',
      summary: 'A team of DANAT researchers have published their findings on a rare gemstone discovered in Bahrain.',
      link: '/news/rare-gemstone-findings'
    },
    {
      title: 'DANAT Partners with International Gemological Institute',
      date: '2023-03-10',
      summary: 'DANAT announces a new partnership with the International Gemological Institute to enhance global gemstone research.',
      link: '/news/igi-partnership'
    }
  ];

  upcomingEvents: Event[] = [
    {
      title: 'Annual Gemstone Symposium',
      date: '2023-09-15',
      location: 'DANAT Institute, Manama, Bahrain',
      description: 'Join us for our annual symposium featuring talks from leading experts in gemology and jewelry design.'
    },
    {
      title: 'Pearl Diving Workshop',
      date: '2023-07-20',
      location: 'Muharraq Island, Bahrain',
      description: 'Experience traditional pearl diving techniques and learn about the history of pearl trading in Bahrain.'
    },
    {
      title: 'Jewelry Design Exhibition',
      date: '2023-08-05',
      location: 'Bahrain National Museum',
      description: 'Showcasing innovative jewelry designs from DANAT students and renowned local artisans.'
    }
  ];
}