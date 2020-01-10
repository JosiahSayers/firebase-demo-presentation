import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageDatabaseServiceService } from './services/message-database-service.service';
import { MessageContainerComponent } from './chat/message-container/message-container.component';
import { MessageComponent } from './chat/message/message.component';
import { SendMessageFormComponent } from './chat/send-message-form/send-message-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageContainerComponent,
    MessageComponent,
    SendMessageFormComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    MessageDatabaseServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
