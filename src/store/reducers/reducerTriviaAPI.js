import {
  GET_TOKEN_LOADING,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  GET_QUESTIONS_LOADING,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
} from '../actions/ActionsTriviaAPI';

const initialState = {
  loading: false,
  token: '',
  questions: [],
  error: '',
}

function reducerTriviaAPI(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN_LOADING:
      return {
        ...state,
          loading: true
      }
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token
      }
      case GET_TOKEN_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
    case GET_QUESTIONS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_QUESTIONS_SUCCESS:
      return {
          ...state,
          loading: false,
          questions: action.payload.questions
      }
      case GET_QUESTIONS_ERROR:
      return {
          ...state,
          loading: false,
          error: action.payload.error
      }
    default:
      return state
  }
}

export default reducerTriviaAPI;