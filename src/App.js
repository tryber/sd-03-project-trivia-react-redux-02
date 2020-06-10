import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Results from './pages/Results';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';
import Header from './components/Header';
import './App.css';
import TriviaAPI from './services/triviaAPI';

export default function App() {
  return (
    <div className="App">
      <TriviaAPI />
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game} />
        <Route path="results" component={Results} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}
