import { combineReducers } from 'redux';
import reducerTeste from './reducerTeste';
import reducerTriviaAPI from './reducerTriviaAPI'

const rootReducer = () => combineReducers({
  reducerTeste,
  reducerTriviaAPI,
});

export default rootReducer;
