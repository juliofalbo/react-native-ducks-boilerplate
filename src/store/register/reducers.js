import * as registerTypes from './types';

export const initialState = {
  email: '',
  username: '',
  phone: '',
  error: false,
  loading: false,
  valid: false
};

export const registerReducers = (state = initialState, action) => {
  switch (action.type) {
    case registerTypes.UPDATE:
      return {
        ...action.registerUpdate,
        error: false,
        loading: false
      };
    case registerTypes.LOADING:
      return {
        ...state,
        loading: true
      };
    case registerTypes.ERROR:
      return {
        ...state,
        error: action.message,
        loading: false
      };
    default:
      return state;
  }
}
