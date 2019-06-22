import axios            from 'axios';
import { createAction } from 'redux-actions';

export const getInitialDataStarted = createAction('GET_INITIAL_DATA_STARTED');
export const getInitialDataSuccess = createAction('GET_INITIAL_DATA_SUCCESS');
export const getInitialDataFailure = createAction('GET_INITIAL_DATA_FAILURE');

export function getInitialData() {
  return async dispatch => {
    try {
      dispatch(getInitialDataStarted());

      const response = await axios.get('/dataMock/data.json');

      dispatch(getInitialDataSuccess(response));
    } catch (e) {
      dispatch(getInitialDataFailure());
    }
  };
}
