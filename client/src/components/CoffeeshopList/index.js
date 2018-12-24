import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { getCoffeeshopQuery } from '../../queries/queries';

class CoffeeshopList extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: null,
  }

  getCoffeeshops = item => {
    const getComments = comment => <p key={comment.text}>{comment.text}</p>

    return (
      <li key={item.id}>
        <p>{item.name}</p>
        <img src={item.image} alt="Coffeeshop"/>
        {item.comments.map(getComments)}
      </li>      
    )    
  }

  render() {
    const {
      data
    } = this.props;

    if (data && data.loading) {
      return (
        <div>Loading data...</div>
      )
    }

    return (
      <ul>
        {data.coffeeshops.map(this.getCoffeeshops)}
      </ul>
    )
  }
}

export default graphql(getCoffeeshopQuery)(CoffeeshopList);
