import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  restartGame() {
    console.log(this.props);
    localStorage.removeItem('state');
  }

  renderRankingList() {
    console.log(this.props);
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <ol>
        {ranking.map(({ name, gravatarEmail, score }, index) => (
          <li>
            <img className="image is-25x25" src={gravatarEmail} alt="profile-pic" />
            <span data-testid={`player-name-${index}`}>{`${name} - `}</span>
            <span data-testid={`player-score-${index}`}>{`${score} pontos`}</span>
          </li>
        ))}
      </ol>
    );
  }

  renderGoHomeButton() {
    console.log(this.props);
    return (
      <Link to="/">
        <button
          type="button"
          className="button is-info card-footer-item"
          data-testid="btn-go-home"
          onClick={() => this.restartGame()}
        >
          JOGAR NOVAMENTE
        </button>
      </Link>
    );
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="card"
          style={{
            width: '600px',
          }}
        >
          <div className="card-header-title is-centered" data-testid="ranking-title">
            Ranking
          </div>
          <div className="card-content">
            {this.renderRankingList()}
          </div>
          <div className="card-content">
            {this.renderGoHomeButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default Ranking;
