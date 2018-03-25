import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements OnInit {

  auth$;

  constructor(private afAuth: AngularFireAuth) { }
  ngOnInit() {
    this.auth$ = this.afAuth.authState;
  }

  emailLogin(email, password): Promise<any> {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  emailRegister(email, password): Promise<any> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password);
  }
}
