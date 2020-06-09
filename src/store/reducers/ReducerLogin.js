import * as types from '../actions/ActionTypes';

const INICIAL_STATE = { name: '', email: '' };

const ReducerLogin = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.HANDLE_LOGIN:
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
};

export default ReducerLogin;
