import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageDatabaseServiceService } from '../../services/message-database-service.service';
import { UserService } from '../../services/auth/user-service';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent {

  constructor(
    private messageService: MessageDatabaseServiceService,
    private userService: UserService
  ) { }

  messageForm = new FormGroup({
    text: new FormControl('')
  });

  sending = false;

  sendMessage() {
    this.sending = true;
    this.userService.user.subscribe(user => {
      this.messageService.send({
        text: this.inputText,
        user: {
          name: user.displayName,
          photoUrl: user.photoURL
        }
      });
      this.messageForm.reset();
      this.sending = false;
    });
  }

  get inputText(): string {
    return this.messageForm.value.text;
  }

}
