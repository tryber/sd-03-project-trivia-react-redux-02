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

  async componentDidMount() {
    const categories = await GET_CATEGORY_API();
    console.log(categories);
  }

  render() {
    return (
      <div>
        Teste
      </div>
    );
  }
}
