/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
// import { createBrowserHistory } from 'history';
// import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

// export const history = createBrowserHistory();
// export const routerMiddleware = createRouterMiddleware(history);

export function configureStore(){
  // create store
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
