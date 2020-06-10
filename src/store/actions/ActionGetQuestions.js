import * as types from './ActionTypes';
import GET_QUESTIONS_API from '../../services/GET_QUESTIONS_API';

const requestQuestions = () => ({
  type: types.REQUEST_QUESTIONS,
});


const questionsSuccess = (questions) => ({
  type: types.QUESTIONS_SUCCESS,
  payload: {
    questions,
  },
});

const questionsError = (error) => ({
  type: types.QUESTIONS_ERROR,
  payload: {
    error,
  },
});

export default function ActionGetQuestions(token) {
  return (dispatch) => {
    dispatch(requestQuestions());
    return GET_QUESTIONS_API(token)
      .then((data) => dispatch(questionsSuccess(data.results), console.log('teste', data)),
        (error) => dispatch(questionsError(error.message)));
  };
}
