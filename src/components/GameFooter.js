import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';

class GameFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTimer() {
    console.log(this.props);
    return (<div>Teste</div>);
  }

  renderButtonNextQuestion() {
    console.log(this.props);
    return (<div>Teste</div>);
  }

  render() {
    return (
      <div>
        {this.renderTimer()}
        {this.renderButtonNextQuestion()}
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

GameFooter.propTypes = {
  GetQuestions: propTypes.func.isRequired,
  questions: propTypes.arrayOf(propTypes.object).isRequired,
};

GameFooter.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFooter);
