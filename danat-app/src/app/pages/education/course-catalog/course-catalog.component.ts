import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  title: string;
  type: string;
  duration: string;
  fee: number;
  location: string;
}

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css']
})
export class CourseCatalogComponent {
  courses: Course[] = [
    { id: 1, title: 'Introduction to Gemology', type: 'Gemology', duration: '4 weeks', fee: 1000, location: 'Online' },
    { id: 2, title: 'Advanced Pearl Diving', type: 'Pearl Diving', duration: '2 weeks', fee: 1500, location: 'Bahrain' },
    { id: 3, title: 'Jewelry Design Basics', type: 'Jewelry Design', duration: '6 weeks', fee: 1200, location: 'Dubai' },
  ];

  filteredCourses: Course[] = this.courses;
  searchTerm: string = '';
  selectedType: string = '';

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course => 
      course.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedType === '' || course.type === this.selectedType)
    );
  }
}