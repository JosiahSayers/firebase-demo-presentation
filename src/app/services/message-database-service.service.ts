import { Injectable } from '@angular/core';
import { Message } from '../shared/models/message.model';
import { Observable, from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageDatabaseServiceService {

  messagesCollection: AngularFirestoreCollection<Message> =
    this.firestore.collection('messages', ref => ref.orderBy('timestamp'));

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAll(): Observable<Message[]> {
    return this.messagesCollection.valueChanges();
  }

  send(message: Message): Observable<any> {
    return from(this.messagesCollection.add(message));
  }
}
