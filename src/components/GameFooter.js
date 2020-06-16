import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Timer from './Timer';
import { ActionResetTimer } from '../store/actions/ActionsTimer';
import { ActionNextQuestion } from '../store/actions';


class GameFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  nextQuestion() {
    const { ChangeQuestion } = this.props;
    ChangeQuestion();
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

  saveScore() {
    const {
      name,
      gravatarEmail,
      assertions, score,
    } = this.props;
    const obj = {
      player: {
        name, gravatarEmail, assertions, score,
      },
    };
    localStorage.setItem('state', JSON.stringify(obj));
  }

  renderButtonNextQuestion() {
    const { questionNumber, ResetTimer } = this.props;
    if (questionNumber === 4) {
      return (
        <Link to="/feedback">
          <button
            type="button"
            className="button is-info card-footer-item"
            data-testid="btn-next"
            onClick={() => this.saveScore()}
          >
            FINALIZAR
          </button>
        </Link>
      );
    }
    return (
      <button
        type="button"
        className="button is-info card-footer-item"
        onClick={() => {
          this.nextQuestion();
          ResetTimer();
        }}
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
          {stopTimer && this.renderButtonNextQuestion()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  ReducerTimer: { timer, stopTimer },
  ReducerQuestions: { questionNumber },
  ReducerPlayer: {
    name,
    gravatarEmail,
    assertions,
    score,
  },
}) => ({
  timer,
  questionNumber,
  name,
  gravatarEmail,
  assertions,
  score,
  stopTimer,
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
  stopTimer: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

GameFooter.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFooter);
