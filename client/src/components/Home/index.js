import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Header from '../Header';
import CoffeeshopList from '../CoffeeshopList';
import './styles.css';

class Home extends Component {
  render() {
    const { auth } = this.props;
    const user = auth.getUser().sub;

    return (
      <div className="App">
        <Header text="I am the header! Hear me roar!"/>
        <button
          onClick={() => {
            auth.login();
            auth.handleAuthentication();
          }}
        >
          Login
        </button>

        <button onClick={auth.logout}>Logout</button>

        
        <CoffeeshopList />

        <div>
          <Link to="/new">Add a new shop!</Link>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);
