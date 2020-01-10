import { Component, OnInit } from '@angular/core';
import { UserService } from './services/auth/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebase-demo';

  constructor(
    private userService: UserService
  ) {}

  loggedIn = false;

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.loggedIn = !!user;
    });
  }
}
