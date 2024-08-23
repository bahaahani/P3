import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  id: number;
  title: string;
  date: Date;
  location: string;
  description: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: Event[] = [
    {
      id: 1,
      title: 'Gemstone Identification Workshop',
      date: new Date('2023-03-15'),
      location: 'Online',
      description: 'Learn to identify various gemstones using advanced techniques.'
    },
    {
      id: 2,
      title: 'Pearl Grading and Valuation Course',
      date: new Date('2023-04-05'),
      location: 'Bahrain',
      description: 'Master the art of grading and valuing pearls in this hands-on course.'
    },
    {
      id: 3,
      title: 'Jewelry Design Competition',
      date: new Date('2023-05-01'),
      location: 'Dubai',
      description: 'Showcase your jewelry design skills and compete for amazing prizes.'
    },
    {
      id: 4,
      title: 'Gemology Symposium',
      date: new Date('2023-01-10'),
      location: 'Abu Dhabi',
      description: 'Join industry experts for discussions on the latest trends in gemology.'
    }
  ];

  get upcomingEvents(): Event[] {
    const now = new Date();
    return this.events.filter(event => event.date >= now).sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  get pastEvents(): Event[] {
    const now = new Date();
    return this.events.filter(event => event.date < now).sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}