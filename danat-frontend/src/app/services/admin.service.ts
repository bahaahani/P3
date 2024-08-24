import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get('/api/admin/courses');
  }

  getUsers(): Observable<any> {
    return this.http.get('/api/admin/users');
  }

  getPayments(): Observable<any> {
    return this.http.get('/api/admin/payments');
  }

  getStatistics(): Observable<any> {
    return this.http.get('/api/admin/statistics');
  }

  createCourse(courseData: any): Observable<any> {
    return this.http.post('/api/admin/courses', courseData);
  }

  updateCourse(courseId: string, courseData: any): Observable<any> {
    return this.http.put(`/api/admin/courses/${courseId}`, courseData);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`/api/admin/courses/${courseId}`);
  }

  updateUserStatus(userId: string, status: string): Observable<any> {
    return this.http.put(`/api/admin/users/${userId}/status`, { status });
  }
}