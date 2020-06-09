import * as types from './ActionTypes';
import { GET_GRAVATAR_HASH } from '../../services';

const ActionSubmitLogin = (email) => ({
  type: types.HANDLE_SUBMIT,
  payload: { hash: GET_GRAVATAR_HASH(email) }
})

export default ActionSubmitLogin;
