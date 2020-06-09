import * as types from './ActionTypes';
import { GET_AVATAR_API } from '../../services';

const ActionGetGravatar = (name, email) => ({
  type: types.GET_GRAVATAR,
  payload: { email, name },
})

export default ActionGetGravatar;
