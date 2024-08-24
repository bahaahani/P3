import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<any[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadNotifications();
  }

  loadNotifications() {
    this.http.get<any[]>('/api/notifications').subscribe(
      (notifications) => {
        this.notificationsSubject.next(notifications);
      },
      (error) => {
        console.error('Error loading notifications', error);
      }
    );
  }

  getNotifications(): Observable<any[]> {
    return this.notifications$;
  }

  addNotification(notification: any): Observable<any> {
    return new Observable(observer => {
      this.http.post('/api/notifications', notification).subscribe(
        (newNotification: any) => {
          const currentNotifications = this.notificationsSubject.value;
          this.notificationsSubject.next([...currentNotifications, newNotification]);
          observer.next(newNotification);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  markAsRead(notificationId: string): Observable<any> {
    return new Observable(observer => {
      this.http.put(`/api/notifications/${notificationId}/read`, {}).subscribe(
        () => {
          const currentNotifications = this.notificationsSubject.value;
          const updatedNotifications = currentNotifications.map(notification => 
            notification.id === notificationId ? { ...notification, read: true } : notification
          );
          this.notificationsSubject.next(updatedNotifications);
          observer.next();
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  deleteNotification(notificationId: string): Observable<any> {
    return new Observable(observer => {
      this.http.delete(`/api/notifications/${notificationId}`).subscribe(
        () => {
          const currentNotifications = this.notificationsSubject.value;
          const updatedNotifications = currentNotifications.filter(notification => notification.id !== notificationId);
          this.notificationsSubject.next(updatedNotifications);
          observer.next();
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}