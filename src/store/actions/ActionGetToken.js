import * as types from './ActionTypes';
import GET_TOKEN_API from '../../services/GET_TOKEN_API';

const requestToken = () => ({
  type: types.REQUEST_TOKEN,
});

const tokenSuccess = (token) => ({
  type: types.TOKEN_SUCCESS,
  payload: {
    token,
  },
});

const tokenError = (error) => ({
  type: types.TOKEN_ERROR,
  payload: {
    error,
  },
});

export default function ActionGetToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return GET_TOKEN_API()
      .then((data) => {
        dispatch(tokenSuccess(data.token));
        localStorage.setItem('token', data.token);
      },
      (error) => dispatch(tokenError(error.message)));
  };
}
