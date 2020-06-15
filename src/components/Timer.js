import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ActionTickTimer } from '../store/actions/ActionsTimer';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setTimer: '',
    };
  }

  componentDidMount() {
    this.StartTimer();
  }

  componentDidUpdate(prevProps) {
    const { stopTimer } = this.props;
    const { stopTimer: prevStopTimer } = prevProps;
    const { setTimer } = this.state;
    if (stopTimer === true) {
      clearInterval(setTimer);
    }

    if (prevStopTimer === true) {
      clearInterval(setTimer);
      this.StartTimer();
    }
  }

  StartTimer() {
    const { TickTimer } = this.props;
    this.setState({ setTimer: setInterval(() => TickTimer(), 1000) });
  }

  render() {
    const { timer } = this.props;
    return (
      <div data-testid="timer">
        {`Tempo: ${timer}`}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    TickTimer: ActionTickTimer,
  }, dispatch,
);

const mapStateToProps = ({
  ReducerTimer: { timer, stopTimer },
}) => ({
  timer, stopTimer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  stopTimer: PropTypes.bool,
  timer: PropTypes.number.isRequired,
  TickTimer: PropTypes.func.isRequired,
};

Timer.defaultProps = {
  stopTimer: false,
};