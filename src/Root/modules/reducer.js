import { handleActions } from 'redux-actions';
import produce           from 'immer';

import { FETCH_STATE } from './constants';
import * as actions    from './actions';

const initialState = {
  bonuses         : [],
  header          : null,
  initialDataState: FETCH_STATE.NOT_STARTED,
};

export default handleActions({
  // Get gameTypes
  [actions.getInitialDataStarted]: produce(draft => {
    draft.initialDataState = FETCH_STATE.IN_PROGRESS;
  }),
  [actions.getInitialDataSuccess]: produce((draft, { payload: { bonuses, header } }) => {
    draft.bonuses = bonuses;
    draft.header = header;
    draft.initialDataState = FETCH_STATE.SUCCESS;
  }),
  [actions.getInitialDataFailure]: produce(draft => {
    draft.initialDataState = FETCH_STATE.FAILURE;
  }),
}, initialState);
