import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/LoginPage/';
import Game from './pages/GamePage/';
import Feedback from './pages/FeedbackPage';
import Ranking from './pages/RankingPage';
import Settings from './pages/SettingsPage';
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
        <Route path="/settings" component={Settings} />
        <Route path="feedback" component={Feedback} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </div>
  );
}
