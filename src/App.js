import React from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Login from './pages/Login';
import Game from './pages/Game';
import Results from './pages/Results';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';
=======
import Login from './pages/LoginPage/';
import Game from './pages/GamePage/';
import Feedback from './pages/FeedbackPage';
import Ranking from './pages/RankingPage';
import Settings from './pages/SettingsPage';
>>>>>>> f67f7a1e0c188b217666dd591baf475a827d1d12
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game} />
<<<<<<< HEAD
        <Route path="results" component={Results} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/settings" component={Settings} />
=======
        <Route path="/settings" component={Settings} />
        <Route path="feedback" component={Feedback} />
        <Route path="/ranking" component={Ranking} />
>>>>>>> f67f7a1e0c188b217666dd591baf475a827d1d12
      </Switch>
    </div>
  );
}
