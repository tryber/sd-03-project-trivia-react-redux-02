import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Game from './pages/GamePage';
import Feedback from './pages/FeedbackPage';
import Ranking from './pages/RankingPage';
import Settings from './pages/SettingsPage';
import './App.css';


export default function App() {
  return (

    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/ranking" component={Ranking} />
    </Switch>

  );
}
