import * as userActions from "../actions/user.action";
import { User } from "../../models/user.model";

export interface UserState {
  user: User;
  loading: boolean;
  loaded: boolean;
  error: string;
}

const initialState: UserState = {
  user: new User(null, "GUEST"),
  loading: false,
  loaded: false,
  error: null
};

/// Reducer function
export function reducer(
  state: UserState = initialState,
  action: userActions.UserActions
) {
  switch (action.type) {
    case userActions.GET_USER:
      return { ...state, loading: true };
    case userActions.AUTHENTICATED:
      const user = action.payload;
      return { ...state, user, loading: false };
    case userActions.NOT_AUTHENTICATED:
      return { ...state, ...initialState, loading: false };
    case userActions.EMAIL_LOGIN:
      return { ...state, error: null, loading: true };
    case userActions.AUTH_ERROR:
      return { ...initialState, ...action.payload, loading: false };
    case userActions.LOGOUT:
      return { ...state, loading: true };
  }
}
