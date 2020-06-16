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
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/settings" component={Settings} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </div>
  );
}
