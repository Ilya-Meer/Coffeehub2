import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { css } from 'aphrodite';

import Page from '../../layout/Page';
import CoffeeshopList from './CoffeeshopList';
import Heading from '../../ui/Heading';
import Subheading from '../../ui/Subheading';

// import styles from './styles';

class Home extends Component {
  render() {
    return (
      <Page>
        <Heading>Coffeeshops</Heading>
        <Subheading>Browse all coffeeshops.</Subheading>
        <CoffeeshopList />
        <div>
          <Link to="/create">Add a new shop!</Link>
        </div>
      </Page>
    );
  }
}

export default Home;
