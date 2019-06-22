import {
  applyMiddleware,
  createStore,
  compose,
}            from 'redux';
import thunk from 'redux-thunk';

import DevTools from 'DevTools';

import rootReducer from './rootReducer';

/**
 * Initialization of Store
 * @param {object} initialState
 * @return {object} Store
 */
export default (initialState = {}) => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
  ),
);
