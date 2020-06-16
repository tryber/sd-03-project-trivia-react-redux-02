import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/GameHeader';

class Feedback extends Component {
  static renderFeedbackMessage(assertions) {
    if (assertions < 3) {
      return 'Podia ser melhor...';
    }
    return 'Mandou bem!';
  }

  render() {
    const stringfiedState = localStorage.getItem('state');
    const state = JSON.parse(stringfiedState);
    const { player: { assertions, score } } = state;
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
        <div>
          <p data-testid="feedback-text">{Feedback.renderFeedbackMessage(assertions)}</p>
          <p data-testid="feedback-total-score">{`Pontuação: ${score}`}</p>
          <p data-testid="feedback-total-question">{`Número de acertos: ${assertions}`}</p>
        </div>
        <div>
          <Link to="/">
            <button data-testid="btn-play-again" type="button">
              Jogar novamente
            </button>
          </Link>
          <Link to="/Ranking">
            <button data-testid="btn-ranking" type="button">
              Ver Ranking
            </button>
          </Link>
        </div>
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
