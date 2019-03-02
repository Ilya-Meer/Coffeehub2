import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Masonry from 'react-masonry-component';

import { getCoffeeshopQuery } from '../../../../queries/queries';

class CoffeeshopList extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: null,
  };

  getCoffeeshops = items => {
    const getComments = comment => <p key={comment.text}>{comment.text}</p>;

    const coffeeshops = items.map(item => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <img
            src={item.image}
            alt="Coffeeshop"
            style={{ maxWidth: '250px' }}
          />
          {item.comments.map(getComments)}
        </div>
      );
    });

    return coffeeshops;
  };

  render() {
    const { data } = this.props;

    if (!data) {
      return <p>Add a Coffeeshop!</p>;
    }

    if (data && data.loading) {
      return <h1 style={{ color: 'white' }}>Loading data...</h1>;
    }

    const coffeeshops = this.getCoffeeshops(data.coffeeshops);

    return (
      <Masonry
        options={{
          gutter: 20,
        }}
      >
        {coffeeshops}
      </Masonry>
    );
  }
}

export default graphql(getCoffeeshopQuery)(CoffeeshopList);
