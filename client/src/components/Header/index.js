import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ text }) => (
  <div className="main">
    <h1>{text}</h1>
  </div>
);

export default Header;
