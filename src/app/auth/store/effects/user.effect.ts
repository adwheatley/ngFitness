import { Injectable } from "@angular/core";

import { User } from "../../models/user.model";
import { AngularFireAuth } from "angularfire2/auth";

import { Action } from "@ngrx/store";
import { Effect, Actions } from "@ngrx/effects";

import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/of";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/delay";

import * as userActions from "../actions/user.action";
import { AuthService } from "../../services";
import * as fromRoot from "../../../store";
import { map } from "rxjs/operators";

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  @Effect()
  getUser: Observable<Action> = this.actions
    .ofType(userActions.GET_USER)
    .map((action: userActions.GetUser) => action.payload)
    .switchMap(payload => this.afAuth.authState)
    .map(authData => {
      if (authData) {
        const user = new User(authData.uid, authData.displayName);
        return new userActions.Authenticated(user);
      } else {
        return new userActions.NotAuthenticated();
      }
    })
    .catch(err => Observable.of(new userActions.AuthError()));

  @Effect()
  loginEmail: Observable<Action> = this.actions
    .ofType(userActions.EMAIL_LOGIN)
    .map((action: userActions.EmailLogin) => action.payload)
    .delay(1000)
    .switchMap(payload => {
      return this.authService.emailLogin(payload.email, payload.password)
      .then(credential => new userActions.GetUser())
      .catch(err => new userActions.AuthError({ error: err.message }));
    });

    @Effect()
    authenticated: Observable<Action> = this.actions
      .ofType(userActions.AUTHENTICATED)
      .pipe(
        map((action: userActions.Authenticated) => action.payload),
        map(item => {
          return new fromRoot.Go({
            path: ["/health"]
          });
        })
      );

    @Effect()
    notAuthenticated: Observable<Action> = this.actions
      .ofType(userActions.NOT_AUTHENTICATED)
      .pipe(
        map((action: userActions.NotAuthenticated) => action.payload),
        map(item => {
          return new fromRoot.Go({
            path: ["/auth"]
          });
        })
      );

  @Effect()
  registerEmail: Observable<Action> = this.actions
    .ofType(userActions.EMAIL_REGISTER)
    .map((action: userActions.EmailRegister) => action.payload)
    .delay(1000)
    .switchMap(payload => {
      return this.authService.emailRegister(payload.email, payload.password)
      .then(credential => new userActions.GetUser())
      .catch(err => new userActions.AuthError({ error: err.message }));
    });

  @Effect()
  logout: Observable<Action> = this.actions
    .ofType(userActions.LOGOUT)
    .map((action: userActions.Logout) => action.payload)
    .switchMap(payload => {
      return Observable.of(this.afAuth.auth.signOut());
    })
    .map(authData => {
      return new userActions.NotAuthenticated();
    })
    .catch(err =>
      Observable.of(new userActions.AuthError({ error: err.message }))
    );
}
