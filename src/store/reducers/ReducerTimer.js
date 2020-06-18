import * as types from '../actions/ActionTypes';

const INICIAL_STATE = {
  timer: 30,
  stopTimer: false,
};

const ReducerTimer = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.TICK_TIMER:
      if (state.timer !== 0 && state.stopTimer === false) {
        return {
          ...state, timer: state.timer - 1,
        };
      } return { ...state };
    case types.RESET_TIMER:
      return { ...state, stopTimer: false, timer: 30 };
    case types.STOP_TIMER:
      return { ...state, stopTimer: true, timer: 30 };
    case types.HANDLE_LOGOUT:
      return INICIAL_STATE;
    default:
      return state;
  }
};

export default ReducerTimer;
