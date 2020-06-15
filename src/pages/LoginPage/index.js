import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ActionSubmitLogin, ActionHandleLogin } from '../../store/actions';

=======
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
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

<<<<<<< HEAD
  renderInputEmail() {
    const { email, HandleLogin } = this.props;
    return (
      <div>
        <label htmlFor="email">Email do Gravatar:</label>
=======
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
    localStorage.setItem('state', JSON.stringify({ player: { name, gravatarEmail } }));
    SubmitLogin();
  }

  renderInputEmail() {
    const { email, HandleLogin } = this.props;
    return (
      <div className="field">
        <label htmlFor="email" className="label">Email do Gravatar:</label>
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
        <input
          htmlFor="email"
          name="email"
          value={email}
          type="email"
          data-testid="input-gravatar-email"
          onChange={(e) => HandleLogin(e.target)}
<<<<<<< HEAD
=======
          className="input"
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
        />
      </div>
    );
  }

  renderInputName() {
    const { name, HandleLogin } = this.props;
    return (
<<<<<<< HEAD
      <div>
        <label htmlFor="player-name">Nome do Jogador:</label>
=======
      <div className="field">
        <label htmlFor="player-name" className="label">Nome do Jogador:</label>
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
        <input
          htmlFor="player-name"
          name="name"
          value={name}
          type="text"
          data-testid="input-player-name"
          onChange={(e) => HandleLogin(e.target)}
<<<<<<< HEAD
=======
          className="input"
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
        />
      </div>
    );
  }

  renderSubmitButton() {
<<<<<<< HEAD
    const { SubmitLogin, email, name } = this.props;
    const disabled = (name !== '' && email !== '');
    return (
      <div>
        <button
          type="button"
          value="Jogar"
          data-testid="btn-play"
          disabled={!disabled}
          onClick={() => SubmitLogin(email)}
        >
          Jogar
        </button>
      </div>
=======
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

>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
    );
  }

  renderInput() {
    return (
<<<<<<< HEAD
      <div>
        {this.renderInputEmail()}
        {this.renderInputName()}
        {this.renderSubmitButton()}
=======
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
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
      </div>
    );
  }

  render() {
<<<<<<< HEAD
    const { logged, hash } = this.props;
    if (logged) return <img src={hash} alt="hash" />;
=======
    const { logged } = this.props;
    if (logged) return <Redirect to="/game" />;

>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
    return this.renderInput();
  }
}


const mapStateToProps = ({
  ReducerLogin: {
<<<<<<< HEAD
    name, email, logged, hash,
  },
}) => ({
  name, email, logged, hash,
=======
    name, email, logged,
  },
}) => ({
  name, email, logged,
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    HandleLogin: ActionHandleLogin,
    SubmitLogin: ActionSubmitLogin,
<<<<<<< HEAD
=======
    GetToken: ActionGetToken,
    SavePlayer: ActionSavePlayer,
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
  }, dispatch,
);

Login.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
<<<<<<< HEAD
  hash: PropTypes.string.isRequired,
  HandleLogin: PropTypes.func.isRequired,
  SubmitLogin: PropTypes.func.isRequired,
=======
  HandleLogin: PropTypes.func.isRequired,
  SubmitLogin: PropTypes.func.isRequired,
  GetToken: PropTypes.func.isRequired,
  SavePlayer: PropTypes.func.isRequired,
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
};

Login.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
