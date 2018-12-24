import React, { Component } from 'react';
import Header from '../Header';
import CoffeeshopList from '../CoffeeshopList';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header text="I am the header! Hear me roar!"/>
        <CoffeeshopList />
      </div>
    );
  }
}

export default Home;
