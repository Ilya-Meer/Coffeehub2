import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Masonry from 'react-masonry-component';
import CoffeeshopThumbnail from '../CoffeeshopThumbnail';

import { GET_COFFEESHOPS } from '../../../../queries/queries';

class CoffeeshopList extends Component {
  static propTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
  };

  static defaultProps = {
    data: null,
    history: null,
  };

  getCoffeeshops = items => {
    const { history } = this.props;

    return items.map(item => (
      <CoffeeshopThumbnail key={item.id} {...item} history={history} />
    ));
  };

  render() {
    return (
      <Query query={GET_COFFEESHOPS}>
        {({ data, loading }) => {
          if (loading) {
            return <h1 style={{ color: 'white' }}>Loading data...</h1>;
          }
          return (
            <Masonry
              options={{
                gutter: 20,
                fitWidth: true,
              }}
              style={{ margin: '0 auto' }}
            >
              {this.getCoffeeshops(data.coffeeshops)}
            </Masonry>
          );
        }}
      </Query>
    );
  }
}

export default CoffeeshopList;
