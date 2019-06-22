import {
  applyMiddleware,
  createStore,
}            from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

/**
 * Initialization Store
 * @param {object} initialState
 * @return {object} Store
 */
export default function (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
