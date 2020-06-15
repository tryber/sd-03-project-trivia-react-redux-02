import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  }

  renderButtonNextQuestion() {
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

const mapStateToProps = ({ ReducerTimer: { timer } }) => ({
  timer,
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
};

GameFooter.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFooter);
