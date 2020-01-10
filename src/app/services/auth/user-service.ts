import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new ReplaySubject<User>(1);

  googleLogIn(): void {
    const exampleUser = {
      displayName: 'Josiah Sayers',
      email: 'josiah.sayers15@gmail.com',
      photoURL: '',
      uid: '123456789'
    };

    this.user.next(exampleUser as User);
  }

  logOut(): void {
    this.user.next(undefined);
  }
}
