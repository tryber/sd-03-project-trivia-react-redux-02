import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class GameContent extends Component {
  renderQuestions() {
    const { questions, index } = this.props;
    console.log(questions[index].question);
    return (<div>TESTE</div>);
  }

  renderOptions() {
    const { questions, index } = this.props;
    console.log(questions[index].incorrect_answers,
      questions[index].correct_answer);
    return (<div>TESTE</div>);
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
