import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Timer from './Timer';
import { ActionResetTimer } from '../store/actions/ActionsTimer';
import { ActionNextQuestion } from '../store/actions';


class GameFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveScore() {
    const { name, gravatarEmail, assertions, score,
    } = this.props;
    const obj = {
      player: {
        name, gravatarEmail, assertions, score,
      },
    };
    localStorage.setItem('state', JSON.stringify(obj));
  }

  nextQuestion() {
    const { ResetTimer, ChangeQuestion } = this.props;
    ChangeQuestion();
    ResetTimer();
    this.removeCorrectAnswerHighlight();
  }

  removeCorrectAnswerHighlight() {
    console.log(this.props);
    const wrongAnswers = document.getElementsByClassName('wrong-answer');
    const wrongAnswersArr = [...wrongAnswers];
    const correctAnswer = document.getElementsByClassName('correct-answer')[0];
    wrongAnswersArr.map((answer) => answer.classList.remove('wrong'));
    correctAnswer.classList.remove('correct');
  }

  renderButtonNextQuestion() {
    const { questionNumber } = this.props;
    if (questionNumber === 4) {
      return (
        <Redirect to="/feedback">
          <button
            type="button"
            className="button is-info card-footer-item"
            data-testid="btn-next"
            onClick={() => this.saveScore()}
          >
            FINALIZAR
          </button>
        </Redirect>
      );
    }
    return (
      <button
        type="button"
        className="button is-info card-footer-item"
        onClick={() => this.nextQuestion()}
        data-testid="btn-next"
      >
        PRÓXIMA
      </button>
    );
  }

  render() {
    const { stopTimer } = this.props;
    return (
      <div className="card-footer">
        <div className="card-footer-item">
          <Timer />
        </div>
        <div>
          {
            stopTimer
              ? this.renderButtonNextQuestion()
              : false
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  {
    ReducerTimer:
    { timer, stopTimer },
    ReducerQuestions:
    { questionNumber },
    ReducerPlayer: {
      name, gravatarEmail, score, assertions,
    },
  },
) => ({
  timer,
  questionNumber,
  stopTimer,
  name,
  gravatarEmail,
  score,
  assertions,
});


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    ResetTimer: ActionResetTimer,
    ChangeQuestion: ActionNextQuestion,
  }, dispatch,
);

GameFooter.propTypes = {
  ResetTimer: PropTypes.func.isRequired,
  ChangeQuestion: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
};

GameFooter.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFooter);
