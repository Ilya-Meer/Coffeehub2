import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';

import Page from '../../layout/Page';
import CoffeeshopList from './CoffeeshopList';
import Heading from '../../ui/Heading';

import styles from './styles';

class Home extends Component {
  render() {
    return (
      <Page>
        <div className={css(styles.pageTitle)}>
          <Heading>Coffeeshops</Heading>
          <p className={css(styles.tagline)}>Browse all coffeeshops.</p>
        </div>
        <CoffeeshopList />
        <div>
          <Link to="/create">Add a new shop!</Link>
        </div>
      </Page>
    );
  }
}

export default Home;
