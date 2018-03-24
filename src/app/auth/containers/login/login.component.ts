import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as fromUserStore from "../../store";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-login',
  template: `
  <h2>Home</h2>
  <div *ngIf="user$ | async as user">
    <h1>Hi, {{ user.displayName }}</h1>
    <h4>{{ user | json }}</h4>

    <app-auth-form *ngIf="!user.uid" (submitted)="loginUser($event)">
      <h1>Login</h1>
      <button type="submit">
        Login
      </button>
      <div class="error" *ngIf="error$ | async as error">
       {{ error }}
      </div>
    </app-auth-form>

    <button *ngIf="user.uid" (click)="logout()">
      Logout
    </button>
  </div>
  `
})
export class LoginComponent implements OnInit {

  user$: Observable<User>;
  error$: Observable<any>;

  constructor(private store: Store<fromUserStore.UserState>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromUserStore.getUser);
    this.error$ = this.store.select(fromUserStore.getUserError);
    this.store.dispatch(new fromUserStore.GetUser());
  }

  logout() {
    this.store.dispatch(new fromUserStore.Logout());
  }

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    this.store.dispatch(new fromUserStore.EmailLogin({email, password}));
  }

}
