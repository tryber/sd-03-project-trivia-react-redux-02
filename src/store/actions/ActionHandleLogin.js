import * as types from './ActionTypes';

const ActionHandleLogin = ({ name, value }) => ({
  type: types.HANDLE_LOGIN,
  payload: { name, value }
})

export default ActionHandleLogin;
