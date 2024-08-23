import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent {
  messages: string[] = [];
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
      // Here you would typically send the message to a backend service
    }
  }
}