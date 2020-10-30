import { combineReducers } from 'redux';

import { AuthReducer } from '@/application/interfaces/ReducerInterface.d';

import auth from './auth';

export interface RootState {
  auth: AuthReducer;
  // user: UserReducer;
  // user: any;
  // modal: any;
  // partner: any;
  // finance: any;
  // notification: any;
}
export const rootReducer = combineReducers<RootState>({
  auth
});
