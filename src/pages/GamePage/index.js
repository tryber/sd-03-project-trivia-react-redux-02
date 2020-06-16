import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import GameHeader from '../../components/GameHeader';
import GameContent from '../../components/GameContent';
import GameFooter from '../../components/GameFooter';
import Loading from '../../components/Loading';
import ActionGetQuestions from '../../store/actions/ActionGetQuestions';
import './GamePage.css';

class Game extends Component {
  componentDidMount() {
    const { GetQuestions } = this.props;
    const token = localStorage.getItem('token');
    console.log('token:', token);
    GetQuestions(token);
  }

  render() {
    const { questions } = this.props;
    if (questions.length === 0) {
      return <Loading />;
    }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="card"
          style={{
            width: '600px',
          }}
        >
          <GameHeader />
          <GameContent />
          <GameFooter />
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
    GetQuestions: ActionGetQuestions,
  }, dispatch,
);

Game.propTypes = {
  GetQuestions: propTypes.func.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
};

Game.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
