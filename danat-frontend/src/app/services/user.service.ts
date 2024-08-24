import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get('/api/user/profile');
  }

  updateUserProfile(profileData: any): Observable<any> {
    return this.http.put('/api/user/profile', profileData);
  }

  changePassword(passwordData: any): Observable<any> {
    return this.http.post('/api/user/change-password', passwordData);
  }

  updateEmailPreferences(preferences: any): Observable<any> {
    return this.http.put('/api/user/email-preferences', preferences);
  }

  getCourseHistory(): Observable<any> {
    return this.http.get('/api/user/course-history');
  }
}