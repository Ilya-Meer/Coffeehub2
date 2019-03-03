import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import { Query } from 'react-apollo';

import Page from '../../layout/Page';
import Heading from '../../ui/Heading';

import { GET_SINGLE_COFFEESHOP } from '../../../queries/queries';

import styles from './styles';

class ShowShopPage extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { match } = this.props;

    return (
      <Query query={GET_SINGLE_COFFEESHOP} variables={{ id: match.params.id }}>
        {({ data, loading }) => {
          if (loading) {
            return <h1 style={{ color: 'white' }}>Loading data...</h1>;
          }

          const { coffeeshop: shop } = data;

          return (
            <Page>
              <div className={css(styles.pageTitle)}>
                <Heading>{shop.name}</Heading>
              </div>
              <img src={shop.image} alt="Coffeeshop" />
              <div>
                <Link to="/create">Add a new shop!</Link>
              </div>
            </Page>
          );
        }}
      </Query>
    );
  }
}

export default ShowShopPage;
