import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
<<<<<<< HEAD

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '2' };
  }

  render() {
    return (
      <div>
        GAMEEEEEEEEEEEEEEEE
=======
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
            width: '400px',
          }}
        >
          <GameHeader />
          <GameContent />
          <GameFooter />
        </div>
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = (state) => ({ state });
=======
const mapStateToProps = ({ ReducerQuestions: { loading, questions } }) => ({
  loading,
  questions,
});
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
<<<<<<< HEAD

=======
    GetQuestions: ActionGetQuestions,
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
  }, dispatch,
);

Game.propTypes = {
<<<<<<< HEAD
=======
  GetQuestions: propTypes.func.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
};

Game.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
