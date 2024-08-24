import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(
      (notifications) => {
        this.notifications = notifications;
      }
    );
  }

  markAsRead(notification: any): void {
    this.notificationService.markAsRead(notification.id).subscribe(
      () => {
        notification.read = true;
      },
      (error) => {
        console.error('Error marking notification as read', error);
      }
    );
  }

  deleteNotification(notification: any): void {
    this.notificationService.deleteNotification(notification.id).subscribe(
      () => {
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
      },
      (error) => {
        console.error('Error deleting notification', error);
      }
    );
  }
}