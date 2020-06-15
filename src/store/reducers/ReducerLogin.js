import * as types from '../actions/ActionTypes';

const INICIAL_STATE = {
  name: '',
  email: '',
<<<<<<< HEAD
  hash: '',
=======
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
  logged: false,
};

const ReducerLogin = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.HANDLE_LOGIN:
      return { ...state, [payload.name]: payload.value };
    case types.HANDLE_SUBMIT:
<<<<<<< HEAD
      return { ...state, hash: payload.hash, logged: true };
=======
      return { ...state, logged: true };
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
    default:
      return state;
  }
};

export default ReducerLogin;
