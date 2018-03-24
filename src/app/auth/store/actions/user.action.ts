import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export const GET_USER = "[Auth] Get user";
export const AUTHENTICATED = "[Auth] Authenticated";
export const NOT_AUTHENTICATED = "[Auth] Not Authenticated";
export const EMAIL_LOGIN = "[Auth] Email login attempt";
export const LOGOUT = "[Auth] Logout";
export const AUTH_ERROR = "[Auth] Error";

/// Get User AuthState
export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload?: any) {}
}

export class Authenticated implements Action {
  readonly type = AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor(public payload?: any) {}
}

/// Email Login Actions
export class EmailLogin implements Action {
  readonly type = EMAIL_LOGIN;
  constructor(public payload: { email: String, password: String}) {}
}

/// Logout Actions
export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload?: any) {}
}

export type UserActions =
  | GetUser
  | Authenticated
  | NotAuthenticated
  | EmailLogin
  | AuthError
  | Logout;
