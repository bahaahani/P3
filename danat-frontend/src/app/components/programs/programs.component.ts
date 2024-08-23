import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  programs = [
    {
      title: 'Gemology Courses',
      description: 'Comprehensive courses covering various aspects of gemstone identification, grading, and evaluation.',
      courses: [
        { name: 'Introduction to Gemology', duration: '4 weeks' },
        { name: 'Advanced Diamond Grading', duration: '6 weeks' },
        { name: 'Colored Stones Identification', duration: '8 weeks' }
      ]
    },
    {
      title: 'Pearl Diving Courses',
      description: 'Learn the art and science of pearl diving, from traditional techniques to modern practices.',
      courses: [
        { name: 'Pearl Diving Basics', duration: '2 weeks' },
        { name: 'Advanced Pearl Harvesting', duration: '4 weeks' },
        { name: 'Pearl Cultivation Techniques', duration: '6 weeks' }
      ]
    },
    {
      title: 'Jewelry Design Courses',
      description: 'Explore the creative world of jewelry design, from concept to creation.',
      courses: [
        { name: 'Jewelry Design Fundamentals', duration: '8 weeks' },
        { name: 'CAD for Jewelry Design', duration: '6 weeks' },
        { name: 'Gemstone Setting Techniques', duration: '4 weeks' }
      ]
    },
    {
      title: 'Research Programs',
      description: 'Participate in cutting-edge research projects in gemology, pearl science, and jewelry technology.',
      courses: [
        { name: 'Gemstone Analysis Research', duration: '6 months' },
        { name: 'Pearl Formation Studies', duration: '1 year' },
        { name: 'Jewelry Manufacturing Innovation', duration: '9 months' }
      ]
    }
  ];
}