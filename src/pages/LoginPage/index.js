import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import SettingsButton from '../../components/SettingsButton';
import {
  ActionSubmitLogin, ActionHandleLogin, ActionGetToken, ActionSavePlayer,
} from '../../store/actions';
import GET_GRAVATAR_API from '../../services/GET_GRAVATAR_API';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async startGame() {
    const {
      SubmitLogin, GetToken, email, name, SavePlayer,
    } = this.props;
    const token = localStorage.getItem('token');
    const gravatarEmail = await GET_GRAVATAR_API(email);
    SavePlayer(name, gravatarEmail);
    if (!token) {
      await GetToken();
    }
    localStorage.removeItem('state');
    localStorage.setItem('state', JSON.stringify({
      player: {
        name, gravatarEmail, assertions: 0, score: 0,
      },
    }));
    SubmitLogin();
  }

  renderInputEmail() {
    const { email, HandleLogin } = this.props;
    return (
      <div className="field">
        <label htmlFor="email" className="label">Email do Gravatar:</label>
        <input
          htmlFor="email"
          name="email"
          value={email}
          type="email"
          data-testid="input-gravatar-email"
          onChange={(e) => HandleLogin(e.target)}
          className="input"
        />
      </div>
    );
  }

  renderInputName() {
    const { name, HandleLogin } = this.props;
    return (
      <div className="field">
        <label htmlFor="player-name" className="label">Nome do Jogador:</label>
        <input
          htmlFor="player-name"
          name="name"
          value={name}
          type="text"
          data-testid="input-player-name"
          onChange={(e) => HandleLogin(e.target)}
          className="input"
        />
      </div>
    );
  }

  renderSubmitButton() {
    const { email, name } = this.props;
    const disabled = (name !== '' && email !== '');
    return (
      <button
        type="button"
        value="Jogar"
        data-testid="btn-play"
        disabled={!disabled}
        onClick={() => this.startGame()}
        className="button is-success"
      >
        Jogar
      </button>

    );
  }

  renderInput() {
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
          <div className="card-header">
            <SettingsButton />
          </div>
          <div className="card-content">
            {this.renderInputEmail()}
            {this.renderInputName()}
          </div>
          <div className="card-content">
            {this.renderSubmitButton()}
          </div>
        </div>
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
    name, email, logged,
  },
}) => ({
  name, email, logged,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    HandleLogin: ActionHandleLogin,
    SubmitLogin: ActionSubmitLogin,
    GetToken: ActionGetToken,
    SavePlayer: ActionSavePlayer,
  }, dispatch,
);

Login.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  HandleLogin: PropTypes.func.isRequired,
  SubmitLogin: PropTypes.func.isRequired,
  GetToken: PropTypes.func.isRequired,
  SavePlayer: PropTypes.func.isRequired,
};

Login.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
