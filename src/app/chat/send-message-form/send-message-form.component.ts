import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageDatabaseServiceService } from '../../services/message-database-service.service';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent {

  constructor(
    private messageService: MessageDatabaseServiceService) { }

  messageForm = new FormGroup({
    text: new FormControl('')
  });

  sending = false;

  onSubmit(): void {
    this.sendMessage();
    this.messageForm.reset();
  }

  sendMessage() {
    this.sending = true;
    this.messageService.send({
      text: this.inputText,
      user: {
        name: 'Test User',
        photoUrl: ''
      }
    });
    this.sending = false;
  }

  get inputText(): string {
    return this.messageForm.value.text;
  }

}
