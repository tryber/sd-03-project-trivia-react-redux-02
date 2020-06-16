import { combineReducers } from 'redux';
import ReducerLogin from './ReducerLogin';
import ReducerToken from './ReducerToken';
import ReducerQuestions from './ReducerQuestions';
import ReducerPlayer from './ReducerPlayer';
import ReducerTimer from './ReducerTimer';
import ReducerPoints from './ReducerPoints';

const rootReducer = () => combineReducers({
  ReducerLogin,
  ReducerToken,
  ReducerQuestions,
  ReducerPlayer,
  ReducerTimer,
  ReducerPoints,
});

export default rootReducer;
