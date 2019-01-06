import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { firebase } from '../../firebase';
import './styles.css';

class Header extends Component {
  logout = () => {
    const { history } = this.props;

    firebase.auth().signOut()
      .then(() => {
        history.push('/');
      });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/login"  
        >
        </Route>
        <Route>
          <div className="main">
            <h1>I am the header! Hear me roar!"</h1>
            <button onClick={this.logout}>Logout</button>
          </div>
        </Route>
      </Switch>
    )
  }
};

export default Header;
