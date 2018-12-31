import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CoffeeshopPage extends Component {
  state = {
    coffeeshopName: '',
    imageURL: '',
  }

  static propTypes = {
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    onSubmit: null,
  }

  handleChange = (e) => {
    e.preventDefault();

    let change = {}
    change[e.target.id] = e.target.value;

    this.setState(() => ({
      ...this.state,
      ...change,
    }));
  }

  renderForm = () => {
    const {
      onSubmit,
    } = this.props;

    const {
      coffeeshopName,
      imageURL,
    } = this.state;

    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="coffeeshopName">
          Coffeeshop Name:
          <input
            type="text"
            id="coffeeshopName"
            onChange={(e) => this.handleChange(e)}
            value={coffeeshopName}
          />
        </label>
        <label htmlFor="coffeeshopName">
          Image URL:
          <input
            type="text"
            id="imageURL"
            onChange={(e) => this.handleChange(e)}
            value={imageURL}
          />
        </label>
      </form>
    )
  }

  render() {
    return (
      this.renderForm()
    );
  }
}

export default withRouter(CoffeeshopPage);