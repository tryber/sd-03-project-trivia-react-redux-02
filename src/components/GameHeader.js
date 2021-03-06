import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GameHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const { score } = this.props;
    return (
      <header className="card-header">
        <div className="card-header-title">
          <div className="media">
            <div className="media-left">
              <img
                src={player.gravatarEmail}
                alt="profile-pic"
                className="image is-48x48"
                data-testid="header-profile-picture"
              />
            </div>
            <p className="title is-6" data-testid="header-player-name">{`Jogador: ${player.name}`}</p>
            <div className="media-right">
              <p className="subtitle is-6" data-testid="header-score">
                {score}
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({
  ReducerPlayer: { name, gravatarEmail, score },
}) => ({
  name,
  gravatarEmail,
  score,
});


GameHeader.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(GameHeader);
