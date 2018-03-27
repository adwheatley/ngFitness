import { Injectable, Component, Directive } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { tap, map, filter, take, switchMap, catchError } from "rxjs/operators";
import * as fromUserStore from "../store";

import { User } from "../models/user.model";
import { of } from "rxjs/observable/of";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromUserStore.AuthState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  isAuthenticated(): Observable<boolean> {
    return this.store
      .select(fromUserStore.isLoggedIn)
      .map((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/auth']);
        }
        return isLoggedIn;
      });
  }
}
