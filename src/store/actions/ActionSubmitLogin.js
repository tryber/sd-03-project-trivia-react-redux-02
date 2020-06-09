import * as types from './ActionTypes';
import { GET_GRAVATAR_API } from '../../services';

const ActionSubmitLogin = (email) => ({
  type: types.HANDLE_SUBMIT,
  payload: { hash: GET_GRAVATAR_API(email) },
});

export default ActionSubmitLogin;
