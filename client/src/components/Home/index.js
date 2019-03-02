import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import CoffeeshopList from '../CoffeeshopList';
import globalStyles from '../../global/styles';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <div className={css(styles.body)}>
        <CoffeeshopList />
        <div>
          <h1 className={css(globalStyles.styledHeading)}>Test Heading</h1>

          <Link to="/create">Add a new shop!</Link>
        </div>
      </div>
    );
  }
}

export default Home;
