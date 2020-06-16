import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/GameHeader';

class Feedback extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '600px',
        }}
      >
        INICIANDO FEEDBACK PAGE
        <Header />
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
