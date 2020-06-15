import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';

<<<<<<< HEAD
=======

>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
<<<<<<< HEAD
  </Provider>, document.getElementById('root'));
=======
  </Provider>, document.getElementById('root'),
);
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
