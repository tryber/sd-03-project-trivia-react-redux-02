import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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
            <div>
              <img className="image is-25x25" src={gravatarEmail} alt="profile-pic" />
              <p data-testid={`player-name-${index}`}>{`${name} - `}</p>
              <p data-testid={`player-score-${index}`}>{`${score} pontos`}</p>
            </div>
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
            width: '1',
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


const mapStateToProps = ({
  ReducerPlayer: {
    name,
    gravatarEmail,
    score,
  },
}) => ({
  name,
  gravatarEmail,
  score,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
  }, dispatch,
);

Ranking.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
