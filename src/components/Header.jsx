import React from 'react';
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
