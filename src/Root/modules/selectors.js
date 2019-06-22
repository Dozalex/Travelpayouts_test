import { REDUCER_NAME as NAME } from './constants';

export const getBonuses = state => state[NAME].bonuses;
export const getheader = state => state[NAME].header;
export const getInitialDataState = state => state[NAME].initialDataState;
