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
        <Link to="/feedback">
          <button
            type="button"
            className="button is-info card-footer-item"
            data-testid="btn-next"
          >
            FINALIZARA
          </button>
        </Link>
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
    return (
      <div className="card-footer">
        <div className="card-footer-item">
          <Timer />
        </div>
        <div>
          {this.renderButtonNextQuestion()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerTimer: { timer }, ReducerQuestions: { questionNumber } }) => ({
  timer,
  questionNumber,
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
