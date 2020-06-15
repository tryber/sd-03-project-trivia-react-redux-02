import * as types from '../actions/ActionTypes';

const INICIAL_STATE = {
  name: '',
  gravatarEmail: '',
  assertions: '',
  score: 0,
};

const ReducerPlayer = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SAVE_PLAYER:
      return { ...state, name: payload.name, gravatarEmail: payload.gravatarEmail };
    default:
      return state;
  }
};

export default ReducerPlayer;
