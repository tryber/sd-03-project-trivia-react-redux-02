import * as types from './ActionTypes';

const ActionSumPoints = (score) => ({
  type: types.SUM_POINTS,
  payload: {
    score,
  },
});

export default ActionSumPoints;
