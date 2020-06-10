import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ActionSubmitLogin, ActionHandleLogin } from '../../store/actions';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderInput() {
    const {
      name, email, HandleLogin, SubmitLogin,
    } = this.props;
    const disabled = (name !== '' && email !== '');
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
        <label htmlFor="player-name">Nome do Jogador:</label>
        <input
          htmlFor="player-name"
          name="name"
          value={name}
          type="text"
          data-testid="input-player-name"
          onChange={(e) => HandleLogin(e.target)}
        />
        <button type="button" value="Jogar" data-testid="btn-play" disabled={!disabled} onClick={() => SubmitLogin(email)}>Jogar</button>
      </div>
    );
  }

  render() {
    const { logged, hash } = this.props;
    if (logged) return <img src={hash} alt="hash" />;
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
