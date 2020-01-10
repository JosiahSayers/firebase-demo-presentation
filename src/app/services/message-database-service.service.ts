import { Injectable } from '@angular/core';
import { Message } from '../shared/models/message.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageDatabaseServiceService {

  messages: Message[] = [
    {
      text: 'This is a message',
      user: {
        name: 'user 1',
        photoUrl: ''
      }
    },
    {
      text: 'Firebase is kewl!',
      user: {
        name: 'Me',
        photoUrl: ''
      }
    }
  ];

  getAll(): Observable<Message[]> {
    return of(this.messages);
  }

  send(message: Message): void {
    this.messages.push(message);
  }
}
