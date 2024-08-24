import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  courses: any[] = [];
  users: any[] = [];
  payments: any[] = [];
  statistics: any = {};
  loading = false;
  error = '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.adminService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Error loading courses';
        this.loading = false;
      }
    );

    this.adminService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        this.error = 'Error loading users';
      }
    );

    this.adminService.getPayments().subscribe(
      (data) => {
        this.payments = data;
      },
      (error) => {
        this.error = 'Error loading payments';
      }
    );

    this.adminService.getStatistics().subscribe(
      (data) => {
        this.statistics = data;
      },
      (error) => {
        this.error = 'Error loading statistics';
      }
    );
  }

  createCourse(courseData: any) {
    this.adminService.createCourse(courseData).subscribe(
      (data) => {
        this.courses.push(data);
      },
      (error) => {
        this.error = 'Error creating course';
      }
    );
  }

  updateCourse(courseId: string, courseData: any) {
    this.adminService.updateCourse(courseId, courseData).subscribe(
      (data) => {
        const index = this.courses.findIndex(course => course.id === courseId);
        if (index !== -1) {
          this.courses[index] = data;
        }
      },
      (error) => {
        this.error = 'Error updating course';
      }
    );
  }

  deleteCourse(courseId: string) {
    this.adminService.deleteCourse(courseId).subscribe(
      () => {
        this.courses = this.courses.filter(course => course.id !== courseId);
      },
      (error) => {
        this.error = 'Error deleting course';
      }
    );
  }

  updateUserStatus(userId: string, status: string) {
    this.adminService.updateUserStatus(userId, status).subscribe(
      (data) => {
        const index = this.users.findIndex(user => user.id === userId);
        if (index !== -1) {
          this.users[index].status = status;
        }
      },
      (error) => {
        this.error = 'Error updating user status';
      }
    );
  }
}