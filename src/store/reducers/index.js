import { combineReducers } from 'redux';
import reducerTriviaAPI from './reducerTriviaAPI'
import ReducerLogin from './ReducerLogin';

const rootReducer = () => combineReducers({
  ReducerLogin,
  reducerTriviaAPI,
});

export default rootReducer;
