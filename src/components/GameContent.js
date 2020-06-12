import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class GameContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderQuestions() {
    const { questions, index } = this.props;
    return (<div>TESTE</div>)
  }

  renderOptions() {
    const { questions, index } = this.props;
    return (<div>TESTE</div>)
  }

  render() {
    return (
      <div>
        {this.renderQuestions()}
        {this.renderOptions()}
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerQuestions: { questions, index } }) => ({
  index,
  questions,
});

GameContent.propTypes = {
  index: propTypes.number.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
};

GameContent.defaultProps = {
};

export default connect(mapStateToProps)(GameContent);
