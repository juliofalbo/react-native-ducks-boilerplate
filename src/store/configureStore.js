import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { api } from '../services/api';
import * as reducers from './reducers';

const configureStore = (initialState = {}) => {
  const rootReducer = combineReducers(reducers)

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk.withExtraArgument({ api }))
  )

  return { store };
}

export { configureStore }
