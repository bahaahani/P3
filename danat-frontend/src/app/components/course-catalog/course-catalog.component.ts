import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css']
})
export class CourseCatalogComponent {
  searchTerm: string = '';
  courses = [
    { name: 'Introduction to Gemology', category: 'gemology' },
    { name: 'Pearl Diving Certification', category: 'pearl-diving' },
    { name: 'Jewelry Design Fundamentals', category: 'jewelry-design' }
  ];

  get filteredCourses() {
    return this.courses.filter(course => 
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}