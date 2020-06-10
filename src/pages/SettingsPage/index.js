import React, { Component } from 'react';
import GET_CATEGORY_API from '../../services/GET_CATEGORY_API';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      categories: [],
    };
  }

  componentDidMount() {
    const categories = GET_CATEGORY_API();
    this.setState({ loading: false, categories });
  }

  render() {
    return (
      <div>
        Teste
      </div>
    );
  }
}
