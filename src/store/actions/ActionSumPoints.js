import * as types from './ActionTypes';

const ActionSumPoints = (points) => ({
  type: types.SUM_POINTS,
  payload: {
    points,
  },
});

export default ActionSumPoints;
