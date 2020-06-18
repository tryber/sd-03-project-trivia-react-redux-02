import * as types from '../actions/ActionTypes';

const INICIAL_STATE = {
  loading: false,
  questions: [],
  questionNumber: 0,
  error: '',
};

function ReducerQuestions(state = INICIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_QUESTIONS:
      return {
        ...state,
        loading: true,
      };
    case types.QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload.questions,
      };
    case types.QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.NEXT_QUESTION:
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };
    case types.HANDLE_LOGOUT:
      return INICIAL_STATE;
    default:
      return state;
  }
}

export default ReducerQuestions;
