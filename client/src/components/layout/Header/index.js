import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';

class Header extends Component {
  static props = {
    history: PropTypes.object,
  };

  static defaultProps = {
    history: null,
  };

  render() {
    return <Nav history={this.props.history} />;
  }
}

export default Header;
