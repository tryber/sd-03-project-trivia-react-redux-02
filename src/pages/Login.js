import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionSubmitLogin, ActionHandleLogin } from '../store/actions';

const

const Login = (props) => {
  const { name, email, HandleLogin, SubmitLogin } = props;
  const disabled = (name !== '' && email !== '')
  return (
    <div>
      <form action={SubmitLogin(email, name)}>
        <label for="email">Email do Gravatar:</label>
        <input htmlFor="email" type="email" name="email" data-testid="input-gravatar-email" value={email} onChange={(e) => HandleLogin(e.target)} />
        <label for="player-name">Nome do Jogador:</label>
        <input htmlFor="player-name" type="text" name="name" data-testid="input-player-name" value={name} onChange={(e) => HandleLogin(e.target)} />
        <input type="submit" value="Jogar" data-testid="btn-play" disabled={!disabled} />
      </form>
    </div>
  );
}


const mapStateToProps = ({ ReducerLogin: { name, email } }) => ({ name, email });


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    HandleLogin: ActionHandleLogin,
    SubmitLogin: ActionSubmitLogin,
  }, dispatch,
);

Login.propTypes = {
};

Login.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);