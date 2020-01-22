import { Injectable } from '@angular/core';
import { Message } from '../shared/models/message.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
      },
      timestamp: new Date()
    },
    {
      text: 'Firebase in the house!',
      user: {
        name: 'Me',
        photoUrl: ''
      },
      timestamp: new Date()
    }
  ];

  getAll(): Observable<Message[]> {
    return of(this.messages);
  }

  send(message: Message): Observable<any> {
    return of(this.messages.push(message)).pipe(delay(300));
  }
}
