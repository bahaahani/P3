import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseProgressService {
  constructor(private http: HttpClient) { }

  getUserCourseProgress(): Observable<any> {
    return this.http.get('/api/user/course-progress');
  }

  updateCourseProgress(courseId: string, progressData: any): Observable<any> {
    return this.http.post(`/api/user/course-progress/${courseId}`, progressData);
  }
}