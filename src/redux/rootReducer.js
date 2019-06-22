import { combineReducers } from 'redux';

import { REDUCER_NAME as MAIN } from 'Root/modules/constants';
import mainReducer              from 'Root/modules/reducer';

export default combineReducers({
  [MAIN]: mainReducer,
});
