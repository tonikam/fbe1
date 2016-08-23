import { Injectable } from "@angular/core";

import { User } from "./user.interface";
import { Router } from "@angular/router";

declare var firebase: any;

@Injectable()
export class LoginService {
  constructor(private router: Router) {}

  registerUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
    this.router.navigate(['/login']);
  }

  loginUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
    this.router.navigate(['/secured']);
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
