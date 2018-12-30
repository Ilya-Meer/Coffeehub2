import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import CoffeeshopList from '../CoffeeshopList';
import './styles.css';

class Home extends Component {
  render() {
    const { auth } = this.props;

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
      </div>
    );
  }
}

export default withRouter(Home);
