import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404!</p>
    <Link to="/">Home</Link>  
  </div>
)

export default NotFoundPage;