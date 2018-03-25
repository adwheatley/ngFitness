import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as fromUserStore from "../../store";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";


@Component({
  selector: 'app-login',
  template: `
  <div *ngIf="user$ | async as user">
  <div *ngIf="user.uid">
    <h1>Hi, {{ user.displayName }}</h1>
    <h4>{{ user | json }}</h4>
  </div>

  <div *ngIf="loading$ | async" class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
    <app-auth-form *ngIf="!user.uid && !(loading$ | async)" (submitted)="loginUser($event)">
      <button type="submit" style="width: 100%" class="btn btn-primary">
        Login
      </button>

      <a routerLink="/auth/register">Not registered?</a>

      <div class="error text-center mb-3" *ngIf="error$ | async as error">
       {{ error }}
      </div>
    </app-auth-form>

    <button *ngIf="user.uid" (click)="logout()">
      Logout
    </button>
  </div>
  `,
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  user$: Observable<User>;
  error$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromUserStore.UserState>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromUserStore.getUser);
    this.error$ = this.store.select(fromUserStore.getUserError);
    this.loading$ = this.store.select(fromUserStore.getUserLoading);
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