import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import { Switch, Route } from 'react-router-dom';
import { firebase } from '../../../firebase';
import styles from './styles.js';

class Nav extends Component {
  logout = () => {
    const { history } = this.props;

    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push('/');
      });
  };
  render() {
    return (
      <Switch>
        <Route exact path="/login" />
        <Route>
          <div className={css(styles.main)}>
            <h1>I am the header! Hear me roar!"</h1>
            <button onClick={this.logout}>Logout</button>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default Nav;
