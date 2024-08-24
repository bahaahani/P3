import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css'],
  standalone: true,
})
export class CourseCatalogComponent implements OnInit {
  courses: any[] = []; // This would typically come from a service
  filteredCourses: any[] = [];
  searchForm!: FormGroup;
  categories: string[] = ['Gemology', 'Pearl Diving', 'Jewelry Design', 'Research'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: [''],
      category: [''],
      minPrice: [''],
      maxPrice: [''],
      minDuration: [''],
      maxDuration: [''],
      minRating: ['']
    });

    // Mock data - replace with actual API call
    this.courses = [
      { id: 1, title: 'Introduction to Gemology', category: 'Gemology', price: 500, duration: 30, rating: 4.5 },
      { id: 2, title: 'Advanced Pearl Diving', category: 'Pearl Diving', price: 800, duration: 60, rating: 4.8 },
      { id: 3, title: 'Jewelry Design Basics', category: 'Jewelry Design', price: 600, duration: 45, rating: 4.2 },
      // Add more courses...
    ];

    this.filteredCourses = this.courses;

    this.searchForm.valueChanges.subscribe(() => {
      this.filterCourses();
    });
  }

  filterCourses(): void {
    const { searchTerm, category, minPrice, maxPrice, minDuration, maxDuration, minRating } = this.searchForm.value;

    this.filteredCourses = this.courses.filter(course => {
      return (
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === '' || course.category === category) &&
        (minPrice === '' || course.price >= minPrice) &&
        (maxPrice === '' || course.price <= maxPrice) &&
        (minDuration === '' || course.duration >= minDuration) &&
        (maxDuration === '' || course.duration <= maxDuration) &&
        (minRating === '' || course.rating >= minRating)
      );
    });
  }
}