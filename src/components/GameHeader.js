import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class GameHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, hash } = this.props;
    return (
      <header className="card-header">
        <div className="card-header-title">
          <div className="media">
            <div className="media-left">
              <img src={hash} alt="profile-pic" className="image is-48x48" />
            </div>
            <p className="title is-6">{`Jogador: ${name}`}</p>
            <div className="media-right">
              <p className="subtitle is-6">{`Pontos: 10`}</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ ReducerLogin: { name, hash } }) => ({
  name,
  hash,
});


GameHeader.propTypes = {
  name: propTypes.string.isRequired,
  hash: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(GameHeader);
