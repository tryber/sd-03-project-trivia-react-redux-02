import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ActionStopTimer } from '../store/actions/ActionsTimer';
import { ActionSortAnswers } from '../store/actions';
import '../pages/GamePage/GamePage.css';

class GameContent extends Component {
  componentDidMount() {
    const { sortAnswers } = this.props;
    sortAnswers();
  }

  highlightCorrectAnswer() {
    console.log(this.props);
    const wrongAnswers = document.getElementsByClassName('wrong-answer');
    const wrongAnswersArr = [...wrongAnswers];
    const correctAnswer = document.getElementsByClassName('correct-answer')[0];
    wrongAnswersArr.map((answer) => answer.classList.add('wrong'));
    correctAnswer.classList.add('correct');
  }

  difficultyMeasurement(difficulty) {
    console.log(this.props);
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

  calculatePoints() {
    const { questions, questionNumber, timer } = this.props;
    const { difficulty } = questions[questionNumber];
    const difficultyValue = this.difficultyMeasurement(difficulty);
    const points = 10 + (timer * difficultyValue);
    return points;
  }

  shuffleOptions(options) {
    const { sortAnswers } = this.props;
    const toBeSorted = [...options];
    if (sortAnswers) {
      return toBeSorted;
    }
    return toBeSorted.sort(() => Math.random() - 0.5);
  }

  generateOptions() {
    const { questions, questionNumber } = this.props;
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = questions[questionNumber];
    const options = [{
      answer: decodeURIComponent(correctAnswer),
      isCorrect: true,
    }];
    incorrectAnswers.map((answer) => options.push({
      answer: decodeURIComponent(answer),
      isCorrect: false,
    }));
    console.log('antes', options);
    console.log(this.shuffleOptions(options));
    const sortedArr = this.shuffleOptions(options);
    return sortedArr;
  }

  renderQuestions() {
    const { questions, questionNumber } = this.props;
    const { category, question } = questions[questionNumber];
    return (
      <div className="game-content-question">
        <div data-testid="question-category" className="game-content-category">
          {decodeURIComponent(category)}
        </div>
        <div data-testid="question-text">
          <p>{decodeURIComponent(question)}</p>
        </div>
      </div>
    );
  }

  renderOptions() {
    const { timer } = this.props;
    return (
      <div className="game-content-answers">
        {this.generateOptions().map(
          (object, i) => (
            <button
              data-testid={object.isCorrect ? 'correct-answer' : `wrong-answer-${i}`}
              type="button"
              className={`button is-fullwidth 
                ${object.isCorrect ? 'correct-answer' : 'wrong-answer'}`}
              onClick={() => this.highlightCorrectAnswer()}
              disabled={(timer === 0)}
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
    ReducerQuestions: { questions, questionNumber, sorted },
    ReducerTimer: { timer },
  },
) => ({
  questionNumber,
  questions,
  timer,
  sorted,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    stopTimer: ActionStopTimer,
    sortAnswers: ActionSortAnswers,
  }, dispatch,
);

GameContent.propTypes = {
  questionNumber: propTypes.number.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
  timer: propTypes.number.isRequired,
  sortAnswers: propTypes.bool.isRequired,
};

GameContent.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContent);
