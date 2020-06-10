import { combineReducers } from 'redux';
import ReducerLogin from './ReducerLogin';
import ReducerToken from './ReducerToken';
import ReducerQuestions from './ReducerQuestions';

const rootReducer = () => combineReducers({
  ReducerLogin,
  ReducerToken,
  ReducerQuestions,
});

export default rootReducer;
