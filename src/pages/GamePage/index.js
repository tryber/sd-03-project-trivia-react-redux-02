import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '2' };
  }

  render() {
    const { hash } = this.props;
    console.log(hash)
    return (
      <div>
        TESTE
        <img src={hash} className="teste"></img>
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerLogin: { hash } }) => ({ hash });


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {

  }, dispatch,
);

Game.propTypes = {
};

Game.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);