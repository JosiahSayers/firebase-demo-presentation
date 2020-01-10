import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{

  @Input() message: Message;
  placeholderImage = '/assets/images/profile_placeholder.png';

  ngOnInit() {
    // document.querySelector('div.user-image').style.backgroundImage = `url(${this.photoUrl})`;
  }

  get photoUrl(): string {
    return this.message.user.photoUrl || this.placeholderImage;
  }

}
