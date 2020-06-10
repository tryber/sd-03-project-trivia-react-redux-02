import * as types from '../actions/ActionTypes';

const initialState = {
  loading: false,
  token: '',
  error: '',
};

function reducerTriviaAPI(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_TOKEN:
      return {
        ...state,
        loading: true,
      };
    case types.TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
      };
    case types.TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default reducerTriviaAPI;
