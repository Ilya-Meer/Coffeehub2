import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoffeeshopList from '../CoffeeshopList';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <CoffeeshopList />
        <div>
          <Link to="/create">Add a new shop!</Link>
        </div>
      </div>
    );
  }
}

export default Home;
