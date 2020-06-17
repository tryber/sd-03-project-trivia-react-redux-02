import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/GameHeader';

class Feedback extends Component {
  static renderFeedbackMessage() {
    const stringfiedState = localStorage.getItem('state');
    const state = JSON.parse(stringfiedState);
    const { player: { assertions } } = state;
    if (assertions < 3) {
      return 'Podia ser melhor...';
    }
    return 'Mandou bem!';
  }

  static renderFeedbackInfo() {
    const stringfiedState = localStorage.getItem('state');
    const state = JSON.parse(stringfiedState);
    const { player: { assertions, score } } = state;
    return (
      <div>
        <p data-testid="feedback-text">{Feedback.renderFeedbackMessage(assertions)}</p>
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
      </div>
    );
  }

  static renderButtons() {
    return (
      <div>
        <Link to="/">
          <button data-testid="btn-play-again" type="button">
            Jogar novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking" type="button">
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          width: '600px',
        }}
      >
        <Header />
        {Feedback.renderFeedbackInfo()}
        {Feedback.renderButtons()}
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerQuestions: { loading, questions } }) => ({
  loading,
  questions,
});


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {

  }, dispatch,
);

Feedback.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
