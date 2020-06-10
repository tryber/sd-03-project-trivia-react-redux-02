import React from 'react';
import { Link } from 'react-router-dom';
import { DiAptana } from 'react-icons/di';

class SettingsButton extends React.Component {
  render() {
    return <Link to="/settings" data-testid="btn-settings"><DiAptana /></Link>;
  }
}

export default SettingsButton;

