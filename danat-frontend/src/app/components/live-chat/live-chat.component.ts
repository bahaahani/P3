import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent {
  messages: ChatMessage[] = [];
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'user' });
      this.newMessage = '';
      // Here you would typically send the message to a backend service
      // For now, let's simulate a bot response
      setTimeout(() => {
        this.messages.push({ text: 'Thank you for your message. How can I assist you today?', sender: 'bot' });
      }, 1000);
    }
  }
}