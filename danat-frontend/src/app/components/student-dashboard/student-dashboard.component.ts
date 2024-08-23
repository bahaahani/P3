import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  name: string;
  progress: number;
}

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  studentName: string = 'John Doe'; // This would typically come from a user service
  enrolledCourses: Course[] = [
    { name: 'Introduction to Gemology', progress: 60 },
    { name: 'Pearl Diving Basics', progress: 30 },
    { name: 'Jewelry Design Fundamentals', progress: 80 }
  ];

  upcomingEvents: string[] = [
    'Gemstone Identification Workshop - May 15, 2023',
    'Guest Lecture: Trends in Jewelry Design - May 22, 2023',
    'Field Trip: Pearl Farm Visit - June 5, 2023'
  ];

  ngOnInit() {
    // Here you would typically fetch the student's data from a service
  }
}