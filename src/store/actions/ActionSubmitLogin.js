import * as types from './ActionTypes';
<<<<<<< HEAD
import GET_GRAVATAR_API from '../../services/GET_GRAVATAR_API';

const ActionSubmitLogin = (email) => ({
  type: types.HANDLE_SUBMIT,
  payload: { hash: GET_GRAVATAR_API(email) },
=======

const ActionSubmitLogin = () => ({
  type: types.HANDLE_SUBMIT,
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
});

export default ActionSubmitLogin;
