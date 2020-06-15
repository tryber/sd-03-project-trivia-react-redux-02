import * as types from '../actions/ActionTypes';

const INICIAL_STATE = {
  name: '',
  email: '',
  logged: false,
};

const ReducerLogin = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.HANDLE_LOGIN:
      return { ...state, [payload.name]: payload.value };
    case types.HANDLE_SUBMIT:
      return { ...state, logged: true };
    default:
      return state;
  }
};

export default ReducerLogin;
