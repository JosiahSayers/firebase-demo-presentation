import { Component, OnInit, ViewRef } from '@angular/core';
import { MessageDatabaseServiceService } from '../../services/message-database-service.service';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  constructor(private messagesService: MessageDatabaseServiceService) { }

  messages: Message[];

  ngOnInit() {
    this.messagesService.getAll().subscribe(msgs => {
      this.messages = msgs;
      setTimeout(() => this.elementRef.scrollTop = this.elementRef.scrollHeight, 0);
    });
  }

  get elementRef(): Element {
    return document.querySelector('app-message-container');
  }

}
