import React from 'react';
import { Link } from 'react-router-dom';
import { DiAptana } from 'react-icons/di';

class SettingsButton extends React.Component {
  render() {
<<<<<<< HEAD
    return <Link to="/settings" data-testid="btn-settings"><DiAptana /></Link>;
=======
    return <Link to="/settings" data-testid="btn-settings"><DiAptana font-size="2em" /></Link>;
>>>>>>> 8d98f526067554ab60cbdc0c8a226355fecf3bc4
  }
}

export default SettingsButton;
