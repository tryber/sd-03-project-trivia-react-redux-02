import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ActionSubmitLogin, ActionHandleLogin, ActionGetToken } from '../../store/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async startGame() {
    const { SubmitLogin, GetToken, email, name } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      await GetToken();
    }
    SubmitLogin(email);
  }

  renderInputEmail() {
    const { email, HandleLogin } = this.props;
    return (
      <div>
        <label htmlFor="email">Email do Gravatar:</label>
        <input
          htmlFor="email"
          name="email"
          value={email}
          type="email"
          data-testid="input-gravatar-email"
          onChange={(e) => HandleLogin(e.target)}
        />
      </div>
    );
  }

  renderInputName() {
    const { name, HandleLogin } = this.props;
    return (
      <div>
        <label htmlFor="player-name">Nome do Jogador:</label>
        <input
          htmlFor="player-name"
          name="name"
          value={name}
          type="text"
          data-testid="input-player-name"
          onChange={(e) => HandleLogin(e.target)}
        />
      </div>
    );
  }

  renderSubmitButton() {
    const { email, name } = this.props;
    const disabled = (name !== '' && email !== '');
    return (
      <div>
        <button
          type="button"
          value="Jogar"
          data-testid="btn-play"
          disabled={!disabled}
          onClick={() => this.startGame()}
        >
          Jogar
        </button>
      </div>
    );
  }

  renderInput() {
    return (
      <div>
        {this.renderInputEmail()}
        {this.renderInputName()}
        {this.renderSubmitButton()}
      </div>
    );
  }

  render() {
    const { logged } = this.props;
    if (logged) return <Redirect to="/game" />;
    return this.renderInput();
  }
}


const mapStateToProps = ({
  ReducerLogin: {
    name, email, logged, hash,
  },
}) => ({
  name, email, logged, hash,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    HandleLogin: ActionHandleLogin,
    SubmitLogin: ActionSubmitLogin,
    GetToken: ActionGetToken,
  }, dispatch,
);

Login.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  HandleLogin: PropTypes.func.isRequired,
  SubmitLogin: PropTypes.func.isRequired,
  GetToken: PropTypes.func.isRequired,
};

Login.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
