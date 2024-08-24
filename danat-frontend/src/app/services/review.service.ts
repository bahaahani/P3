import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) { }

  getCourseReviews(courseId: string): Observable<any> {
    return this.http.get(`/api/courses/${courseId}/reviews`);
  }

  addReview(courseId: string, review: any): Observable<any> {
    return this.http.post(`/api/courses/${courseId}/reviews`, review);
  }

  updateReview(courseId: string, reviewId: string, review: any): Observable<any> {
    return this.http.put(`/api/courses/${courseId}/reviews/${reviewId}`, review);
  }

  deleteReview(courseId: string, reviewId: string): Observable<any> {
    return this.http.delete(`/api/courses/${courseId}/reviews/${reviewId}`);
  }
}