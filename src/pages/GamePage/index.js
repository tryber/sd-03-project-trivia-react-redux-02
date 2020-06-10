import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import ActionGetQuestions from '../../store/actions/ActionGetQuestions';

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
      return (
        <div>
          Carregando
        </div>
      );
    }
    return (
      <div>
        {questions.map((item) => <div>{item.category}</div>)}
      </div>
    );
  }
}

Game.propTypes = {
  GetQuestions: propTypes.func.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
};

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
};

Game.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
