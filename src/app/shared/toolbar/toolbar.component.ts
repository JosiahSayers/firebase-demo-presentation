import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/auth/user-service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userImg: string;
  loggedIn = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.userImg = user?.photoURL ? user.photoURL : environment.UserPlaceholderImage;
      this.loggedIn = !!user;
    });
  }

  logOut(): void {
    this.userService.logOut();
  }
}
