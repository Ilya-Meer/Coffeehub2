import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Masonry from 'react-masonry-component';
import CoffeeshopThumbnail from '../CoffeeshopThumbnail';

import { getCoffeeshopQuery } from '../../../../queries/queries';

class CoffeeshopList extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: null,
  };

  getCoffeeshops = items => {
    return items.map(item => <CoffeeshopThumbnail key={item.id} {...item} />);
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
          gutter: 10,
          fitWidth: true,
        }}
        style={{ margin: '0 auto' }}
      >
        {coffeeshops}
      </Masonry>
    );
  }
}

export default graphql(getCoffeeshopQuery)(CoffeeshopList);
