import * as types from './ActionTypes';

const ActionSavePlayer = (name, gravatarEmail) => ({
  type: types.SAVE_PLAYER,
  payload: { name, gravatarEmail },
});

export default ActionSavePlayer;
