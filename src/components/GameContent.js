import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class GameContent extends Component {
  renderQuestions() {
    const { questions, index } = this.props;
    const { category, question } = questions[index];
    return (
      <div className="game-content-question">
        <div data-testid="question-category" className="game-content-category">
          {category}
        </div>
        <div data-testid="question-text">
          <p>{question}</p>
        </div>
      </div>
    );
  }

  generateOptions() {
    const { questions, index } = this.props;
    const { correct_answer, incorrect_answers } = questions[index];
    return document.getElementsByClassName('answer');
  }

  renderOptions() {
    const { questions, index } = this.props;
    const { correct_answer, incorrect_answers } = questions[index];
    return (
      <div className="game-content-answers">
        <button data-testid="correct-answer" type="button" className="button is-fullwidth">
          {correct_answer}
        </button>
        {incorrect_answers.map(
          (answer, i) => (
            <button
              data-testid={`wrong-answer-${i}`}
              type="button"
              className="button is-fullwidth"
            >
              {answer}
            </button>
          ),
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="game-content">
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
