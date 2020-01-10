import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { User, auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.user;
  }

  googleLogIn(): void {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(userCredential => {
      console.log('Signed in!');
    });
  }

  logOut(): void {
    this.afAuth.auth.signOut();
  }
}
