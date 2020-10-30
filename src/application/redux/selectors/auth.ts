import { createSelector } from 'reselect';

const authSelector = (state: { auth: any; }) => state.auth;

export const selectIsLogin = createSelector(
  [authSelector],
  ({ isLogin }) => isLogin
);

export const selectToken = createSelector(
  [authSelector],
  ({ token }) => token
);
