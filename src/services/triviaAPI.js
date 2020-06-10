import React from 'react';
import { connect } from 'react-redux';
import {
getTokenLoading,
getTokenSuccess,
getTokenError,
getQuestionsLoading,
getQuestionsSuccess,
getQuestionsError
} from '../store/actions/ActionsTriviaAPI'

class TriviaAPI extends React.Component {
  constructor(props) {
    super(props);
    this.getToken = this.getToken.bind(this);
  }

  getToken() {
    const {  getTokenLoading, getTokenSuccess, getTokenError, } = this.props;
      getTokenLoading();
      fetch('https://opentdb.com/api_token.php?command=request')
        .then((res) => res.json())
        .then((res => console.log(res)))
        .then((res) => {
          getTokenSuccess(res.token);
          return res.token;
        })
  }

  getQuestions(token) {
    const {  getQuestionsLoading, getQuestionsSuccess, getQuestionsError, } = this.props;
      getQuestionsLoading();
      fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
        .then((res) => res.json())
        .then((res => console.log(res)))
        .then((res) => {
          if (res.response_code !== 0) {
            throw (res.error);
          }
          getQuestionsSuccess(res.results);
          return res.token;
        })
        .catch((error) => {
          getQuestionsError(error);
        });
  }

  render() {
    const { token } = this.props;
    return (
      <div>
        <button type="button" onClick={() => this.getToken()}>
          getToken
        </button>
        <button type="button" onClick={() => this.getQuestions(token)}>
          getQuestions
        </button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  loading: state.reducerTriviaAPI.loading,
  token: state.reducerTriviaAPI.token,
})

const mapDispatchToProps = (dispatch) => ({
  getTokenLoading: () => dispatch(getTokenLoading()),
  getTokenSuccess: (token) => dispatch(getTokenSuccess(token)),
  getTokenError: (error) => dispatch(getTokenError(error)),
  getQuestionsLoading: () => dispatch(getQuestionsLoading()),
  getQuestionsSuccess: (questions) => dispatch(getQuestionsSuccess(questions)),
  getQuestionsError: (error) => dispatch(getQuestionsError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(TriviaAPI);
