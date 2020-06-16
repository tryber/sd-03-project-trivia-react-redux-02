import * as types from './ActionTypes';

const ActionSaveScore = (score) => ({
  type: types.SAVE_SCORE,
  payload: { score },
});

export default ActionSaveScore;
