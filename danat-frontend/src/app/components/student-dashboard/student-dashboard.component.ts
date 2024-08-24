import { Component, OnInit } from '@angular/core';
import { CourseProgressService } from '../../services/course-progress.service';
import { CourseCatalogComponent } from '../course-catalog/course-catalog.component';
import { CourseProgressComponent } from '../course-progress/course-progress.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  standalone: true,
  imports: [CourseCatalogComponent, CourseProgressComponent, CommonModule]
})
export class StudentDashboardComponent implements OnInit {
  enrolledCourses: any[] = [];

  constructor(private courseProgressService: CourseProgressService) { }

  ngOnInit(): void {
    this.loadEnrolledCourses();
  }

  loadEnrolledCourses() {
    this.courseProgressService.getUserCourseProgress().subscribe(
      (data) => {
        this.enrolledCourses = data;
      },
      (error) => {
        console.error('Error loading enrolled courses', error);
      }
    );
  }
}