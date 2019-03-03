import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../../firebase/firebaseContext';
import { addCoffeeshopMutation } from '../../../queries/queries';
import { css } from 'aphrodite';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import styles from './styles';

import Page from '../../layout/Page';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

class CreateCoffeeshopPage extends Component {
  state = {
    coffeeshopName: '',
    imageURL: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: null,
  };

  handleChange = e => {
    e.preventDefault();

    let change = {};
    change[e.target.id] = e.target.value;

    this.setState(() => ({
      ...this.state,
      ...change,
    }));
  };

  onSubmit = (e, author) => {
    e.preventDefault();

    const { mutate: addCoffeeshopMutation } = this.props;

    const { coffeeshopName, imageURL } = this.state;

    const variables = {
      name: coffeeshopName,
      image: imageURL,
      author,
    };

    addCoffeeshopMutation({ variables });
  };

  renderForm = () => {
    const { coffeeshopName, imageURL } = this.state;

    return (
      <FirebaseContext.Consumer>
        {currentUser => {
          return (
            <Page>
              <div className={css(styles.pageTitle)}>
                <Heading>Add a Coffeeshop</Heading>
                <p className={css(styles.tagline)}>
                  Tell others about your find.
                </p>
              </div>
              <form
                onSubmit={e => this.onSubmit(e, currentUser)}
                className={css(styles.form)}
              >
                <label htmlFor="coffeeshopName">
                  Coffeeshop Name:
                  <input
                    type="text"
                    id="coffeeshopName"
                    onChange={e => this.handleChange(e)}
                    value={coffeeshopName}
                  />
                </label>
                <label htmlFor="coffeeshopName">
                  Image URL:
                  <input
                    type="text"
                    id="imageURL"
                    onChange={e => this.handleChange(e)}
                    value={imageURL}
                  />
                </label>
                <Button type="submit">Add Coffeeshop</Button>
              </form>
              <div>
                <Link to="/">Home</Link>
              </div>
            </Page>
          );
        }}
      </FirebaseContext.Consumer>
    );
  };

  render() {
    return this.renderForm();
  }
}

export default graphql(addCoffeeshopMutation)(CreateCoffeeshopPage);
