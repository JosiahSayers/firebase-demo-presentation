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
import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { LoginComponent } from './auth/login/login.component';
import { UserService } from './services/auth/user-service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

// When running in production mode Angular is not picking up this value from the environment file :(
const firebaseConfig = {
  apiKey: 'AIzaSyBwmWk7HZ0nqSuf1AgKm4-EDiR-aAaeonQ',
  authDomain: 'fir-dev-chapter.firebaseapp.com',
  databaseURL: 'https://fir-dev-chapter.firebaseio.com',
  projectId: 'fir-dev-chapter',
  storageBucket: 'fir-dev-chapter.appspot.com',
  messagingSenderId: '546625539681',
  appId: '1:546625539681:web:2af3ba786a7b354b7f6420',
  measurementId: 'G-S740GFS6LJ'
};

@NgModule({
  declarations: [
    AppComponent,
    MessageContainerComponent,
    MessageComponent,
    SendMessageFormComponent,
    ToolbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    MessageDatabaseServiceService,
    UserService,
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
