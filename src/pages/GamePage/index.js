import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '2' };
  }

  render() {
    return (
      <div>
        GAMEEEEEEEEEEEEEEEE
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {

  }, dispatch,
);

Game.propTypes = {
};

Game.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
