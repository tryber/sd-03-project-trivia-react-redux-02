import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game} />
        <Route path="feedback" component={Feedback} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}
