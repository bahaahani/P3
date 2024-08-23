import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  studentName = 'John Doe'; // This would typically come from a service
  enrolledCourses = [
    { name: 'Introduction to Gemology', progress: 60 },
    { name: 'Pearl Diving Basics', progress: 30 }
  ];
}