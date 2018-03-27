import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as fromUserStore from "../../store";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";


@Component({
  selector: 'app-login',
  template: `
  <app-spinner *ngIf="loading$ | async"></app-spinner>
  <div *ngIf="!(loading$ | async)">
  <app-auth-header></app-auth-header>
    <app-auth-form (submitted)="loginUser($event)">
      <button type="submit" style="width: 100%" class="btn btn-primary">
        Login
      </button>
      <a routerLink="/auth/register">Not registered?</a>
      <div class="error text-center mb-3" *ngIf="error$ | async as error">
       {{ error }}
      </div>
    </app-auth-form>
    <app-auth-footer></app-auth-footer>
    </div>
  `,
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  error$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromUserStore.UserState>) {}

  ngOnInit() {
    this.store.dispatch(new fromUserStore.GetUser());
    this.error$ = this.store.select(fromUserStore.getUserError);
    this.loading$ = this.store.select(fromUserStore.getUserLoading);
  }

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    this.store.dispatch(new fromUserStore.EmailLogin({email, password}));
  }

}
