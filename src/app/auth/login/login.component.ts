import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/auth/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService
  ) { }

  buttonImg = environment.GoogleSignInButton.normal;

  startGoogleLogin(): void {
    this.buttonImg = environment.GoogleSignInButton.pressed;
    this.userService.googleLogIn();
  }

}
