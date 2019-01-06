import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase/firebaseContext';
import { addCoffeeshopMutation } from '../../queries/queries';
import { graphql } from 'react-apollo';

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

  onSubmit = (e, author) => {
    e.preventDefault();

    const {
      mutate: addCoffeeshopMutation,
    } = this.props;

    const {
      coffeeshopName,
      imageURL,
    } = this.state;

    const variables = {
      name: coffeeshopName,
      image: imageURL,
      author,
    };

    addCoffeeshopMutation({ variables });
  }

  renderForm = () => {
    const {
      coffeeshopName,
      imageURL,
    } = this.state;

    return (
      <FirebaseContext.Consumer>
        {currentUser => {
          return (
            <React.Fragment>
              <form onSubmit={(e) => this.onSubmit(e, currentUser)}>
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
                <button type="submit">Add Coffeeshop</button>
              </form>
              <div>
                <Link to="/">Home</Link>
              </div>
            </React.Fragment>
          )
        }}
      </FirebaseContext.Consumer>
    )
  }

  render() {
    return (
      this.renderForm()
    );
  }
}

export default graphql(addCoffeeshopMutation)(CoffeeshopPage);