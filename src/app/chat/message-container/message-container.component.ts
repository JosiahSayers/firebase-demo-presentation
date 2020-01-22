import { Component, OnInit } from '@angular/core';
import { MessageDatabaseServiceService } from '../../services/message-database-service.service';
import { Message } from '../../shared/models/message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  constructor(private messagesService: MessageDatabaseServiceService) { }

  private messages: Message[];

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
