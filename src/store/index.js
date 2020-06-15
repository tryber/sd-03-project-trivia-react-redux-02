<<<<<<< HEAD
=======

>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer(), composeEnhancers(applyMiddleware(thunk)));

export default store;
