import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  courseCategories = [
    {
      name: 'Gemology Courses',
      description: 'Learn about the science of gemstones, their properties, and identification techniques.',
      courses: ['Introduction to Gemology', 'Advanced Gemstone Identification', 'Diamond Grading']
    },
    {
      name: 'Pearl Diving Courses',
      description: 'Discover the art and science of pearl diving, from traditional techniques to modern practices.',
      courses: ['Pearl Diving Basics', 'Advanced Pearl Harvesting', 'Pearl Cultivation Techniques']
    },
    {
      name: 'Jewelry Design Courses',
      description: 'Explore the creative world of jewelry design, from concept to creation.',
      courses: ['Jewelry Design Fundamentals', 'CAD for Jewelry Design', 'Gemstone Setting Techniques']
    }
  ];

  facilities = [
    'State-of-the-art gemological laboratories',
    'Pearl diving simulation pool',
    'Jewelry design studios with 3D printing capabilities',
    'Extensive gemstone and pearl library',
    'Student lounge and collaborative spaces'
  ];

  events = [
    'Annual Gemstone Symposium',
    'Pearl Diving Competition',
    'Jewelry Design Showcase',
    'Guest Lectures by Industry Experts',
    'Field Trips to Local Mines and Pearl Farms'
  ];
}