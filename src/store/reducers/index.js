import { combineReducers } from 'redux';
import ReducerLogin from './ReducerLogin';
import ReducerToken from './ReducerToken';
import ReducerQuestions from './ReducerQuestions';
<<<<<<< HEAD
=======
import ReducerPlayer from './ReducerPlayer';
import ReducerTimer from './ReducerTimer';
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4

const rootReducer = () => combineReducers({
  ReducerLogin,
  ReducerToken,
  ReducerQuestions,
<<<<<<< HEAD
=======
  ReducerPlayer,
  ReducerTimer,
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
});

export default rootReducer;
