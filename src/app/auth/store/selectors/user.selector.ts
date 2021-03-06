import { createSelector } from "@ngrx/store";

import { User } from "../../models/user.model";
import * as fromFeature from "../reducers";
import * as fromUser from "../reducers/user.reducer";

export const getUserState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthState) => {
    if (state) {
      return state.user;
    }
  }
);

export const isLoggedIn = createSelector(
  getUserState,
  (state: fromUser.UserState) => state.loggedIn
);

export const getUser = createSelector(
  getUserState,
  (state: fromUser.UserState) => {
    if (state) {
      return state.user;
    }
  }
);

export const getUserLoading = createSelector(
  getUserState,
  (state: fromUser.UserState) => {
    if (state) {
      return state.loading;
    }
  }
);

export const getUserLoaded = createSelector(
  getUserState,
  (state: fromUser.UserState) => state.loaded
);

export const getUserError = createSelector(
  getUserState,
  (state: fromUser.UserState) => {
    if (state) {
      return state.error;
    }
  }
);

