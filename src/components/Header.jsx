import React from 'react';
import { connect } from 'react-redux';
import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import logo from '../trivia.png';

function Header({ children }) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Header;

const GameHeader = ({ score, name, email }) => {
  const trimmedAndLowercasedMail = email.trim().toLocaleLowerCase();
  return (
    <div>
      <img
        src={`https://www.gravatar.com/avatar/${MD5(trimmedAndLowercasedMail)}`}
        alt="Gravatar image"
        data-testid="header-profile-picture"
      />
      <h1 data-testid="header-player-name">{`Jogador: ${name}`}</h1>
      <h2>
        Pontos:
        <span data-testid="header-score">{score}</span>
      </h2>
    </div>
  );
};

const mapStateToProps = ({ reducer: { score, name, email } }) => (
  { score, name, email }
);

export default connect(mapStateToProps)(GameHeader);

GameHeader.propTypes = {
  score: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
};

GameHeader.defaultProps = {
  score: 0,
  name: '',
  email: '',
};
