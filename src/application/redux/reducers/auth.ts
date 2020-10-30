import {
  SET_LOGIN,
  SET_LOGOUT,
  SET_TOKEN
} from '../types.d';

const initialState = {
  isLogin: false,
  token: ''
};

const auth = (state = initialState, action: any) => {
  switch (action.type){
    case SET_LOGIN:
      return {
        ...state,
        isLogin: true
      };

    case SET_LOGOUT:
      return {
        ...state,
        isLogin: false
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default auth;
