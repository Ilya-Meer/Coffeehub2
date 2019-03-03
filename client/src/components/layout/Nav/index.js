import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import { Switch, Route } from 'react-router-dom';
import { firebase } from '../../../firebase';
import Button from '../../ui/Button';
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
            <Button onClick={this.logout}>Log Out</Button>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default Nav;
