import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ActionStopTimer } from '../store/actions/ActionsTimer';
import '../pages/GamePage/GamePage.css';

class GameContent extends Component {
  static highlightCorrectAnswer() {
    const wrongAnswers = document.getElementsByClassName('wrong-answer');
    const wrongAnswersArr = [...wrongAnswers];
    const correctAnswer = document.getElementsByClassName('correct-answer')[0];
    wrongAnswersArr.map((answer) => answer.classList.add('wrong'));
    wrongAnswersArr.map((answer) => answer.classList.add('is-danger'));
    correctAnswer.classList.add('correct');
    correctAnswer.classList.add('is-success');
  }

  static calculatePoints() {
    const { questions, questionNumber, timer } = this.props;
    const { difficulty } = questions[questionNumber];
    const difficultyValue = this.difficultyMeasurement(difficulty);
    const points = 10 + (timer * difficultyValue);
    return points;
  }


  static difficultyMeasurement(difficulty) {
    switch (difficulty) {
      case 'easy': {
        return 1;
      }
      case 'medium': {
        return 2;
      }
      case 'hard': {
        return 3;
      }
      default: return 0;
    }
  }

  generateOptions() {
    const { questions, questionNumber } = this.props;
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = questions[questionNumber];
    const options = [{
      answer: correctAnswer,
      isCorrect: true,
    }];
    incorrectAnswers.map((answer) => options.push({
      answer,
      isCorrect: false,
    }));
    return options.sort(() => Math.random() - 0.5);
  }

  renderQuestions() {
    const { questions, questionNumber } = this.props;
    const { category, question } = questions[questionNumber];
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

  renderOptions() {
    return (
      <div className="game-content-answers">
        {this.generateOptions().map(
          (object, i) => (
            <button
              data-testid={object.isCorrect ? 'correct-answer' : `wrong-answer-${i}`}
              type="button"
              className={`button is-fullwidth 
                ${object.isCorrect ? 'correct-answer' : 'wrong-answer'}`}
              onClick={GameContent.highlightCorrectAnswer}
            >
              {object.answer}
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

const mapStateToProps = (
  {
    ReducerQuestions: { questions, questionNumber },
    ReducerTimer: { timer },
  },
) => ({
  questionNumber,
  questions,
  timer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    stopTimer: ActionStopTimer,
  }, dispatch,
);

GameContent.propTypes = {
  questionNumber: propTypes.number.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
  timer: propTypes.number.isRequired,
};

GameContent.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContent);
