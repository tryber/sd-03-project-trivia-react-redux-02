import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import '../pages/GamePage/GamePage.css';
import { ActionStopTimer } from '../store/actions/ActionsTimer';
import { ActionSumPoints } from '../store/actions';

class GameContent extends Component {
  static compareAnswers(a, b) {
    const ans1 = a.answer.toUpperCase();
    const ans2 = b.answer.toUpperCase();
    let comparison = 0;
    if (ans1 > ans2) {
      comparison = 1;
    } else if (ans1 < ans2) {
      comparison = -1;
    }
    return comparison;
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

  handleAnswer(event) {
    this.highlightCorrectAnswer();
    const answerClassList = event.target.classList;
    const answer = [...answerClassList];
    if (answer.includes('correct-answer')) {
      this.calculatePoints();
    }
  }

  calculatePoints() {
    const {
      questions,
      questionNumber,
      timer, sumPoints,
    } = this.props;
    const { difficulty } = questions[questionNumber];
    const difficultyValue = this.difficultyMeasurement(difficulty);
    const points = 10 + (timer * difficultyValue);
    this.sumPointsAtLocalStorage(points);
    sumPoints(points);
  }

  sumPointsAtLocalStorage(points) {
    console.log(this.state);
    const state = localStorage.getItem('state');
    const object = JSON.parse(state);
    object.player.score += points;
    object.player.assertions += 1;
    const result = JSON.stringify(object);
    localStorage.setItem('state', result);
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
    return options.sort(GameContent.compareAnswers);
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
              onClick={(event) => this.handleAnswer(event)}
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
    sumPoints: ActionSumPoints,
  }, dispatch,
);

GameContent.propTypes = {
  questionNumber: propTypes.number.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
  timer: propTypes.number.isRequired,
  sumPoints: propTypes.func.isRequired,
};

GameContent.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContent);
