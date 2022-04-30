import { REDUCER_GROUP } from '../reducer.group';

export const INITIAL_STATE = {};

export default (
  state = INITIAL_STATE,
  action = {
    type: '',
    payload: {},
    meta: {},
    group: '',
  }
) => {
  if (action.group !== REDUCER_GROUP.APP) return state;

  switch (action.type) {
    default:
      return state;
  }
};
