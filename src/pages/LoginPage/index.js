import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ActionSubmitLogin, ActionHandleLogin } from '../../store/actions';

const Input = (props) => {
  const { name, email, HandleLogin, SubmitLogin } = props;
  const disabled = (name !== '' && email !== '');
  return (
    <div>
      <form onSubmit={() => SubmitLogin(email)}>
        <label htmlFor="email">Email do Gravatar:</label>
        <input
          htmlFor="email"
          name="email"
          value={email}
          type="email"
          data-testid="input-gravatar-email"
          onChange={(e) => HandleLogin(e.target)}
        />
        <label htmlFor="player-name">Nome do Jogador:</label>
        <input
          htmlFor="player-name"
          name="name"
          value={name}
          type="text"
          data-testid="input-player-name"
          onChange={(e) => HandleLogin(e.target)}
        />
        <input type="submit" value="Jogar" data-testid="btn-play" disabled={!disabled} />
      </form>
    </div>
  );
}

const Login = (props) => {
  if (props.logged) return <img src={props.hash} alt="gravatar-icon" />;
  return Input(props);
}


const mapStateToProps = ({
  ReducerLogin: {
    name, email, logged, hash } }) =>
  ({ name, email, logged, hash });

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    HandleLogin: ActionHandleLogin,
    SubmitLogin: ActionSubmitLogin,
  }, dispatch,
);

Login.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  hash: PropTypes.string.isRequired,
  HandleLogin: PropTypes.func.isRequired,
  SubmitLogin: PropTypes.func.isRequired,
};

Login.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);