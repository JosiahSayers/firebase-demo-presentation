import { Component, Input } from '@angular/core';
import { Message } from '../../shared/models/message.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input() message: Message;

  get photoUrl(): string {
    return this.message.user.photoUrl || environment.UserPlaceholderImage;
  }

}
