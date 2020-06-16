import * as types from '../actions/ActionTypes';

const INICIAL_STATE = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

const ReducerPlayer = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SAVE_PLAYER:
      return { ...state, name: payload.name, gravatarEmail: payload.gravatarEmail };
    case types.SAVE_SCORE:
      return { ...state, score: state.score + payload.score, assertions: state.assertions + 1 };
    default:
      return state;
  }
};

export default ReducerPlayer;
