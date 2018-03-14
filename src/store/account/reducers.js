import * as accountTypes from './types';

export const initialState = {
  username: '',
  password: '',
  error: false,
  loading: false
};

export const accountReducers = (state = initialState, action) => {
  switch (action.type) {
    case accountTypes.RECEIVE:
      return {
        ...action.account,
        error: false,
        loading: false
      };
    case accountTypes.UPDATE:
      return {
        ...action.accountUpdate,
        loading: false,
        error: false
      };
    case accountTypes.RESET:
      return initialState
    case accountTypes.LOADING:
      return { ...state, loading: true };
    case accountTypes.ERROR:
      return {
        ...state,
        error: action.message,
        loading: false
      };
    default:
      return state;
  }
}