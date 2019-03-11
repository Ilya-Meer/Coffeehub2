import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import { Mutation } from 'react-apollo';

import Button from '../../../ui/Button';

import { ADD_COMMENT } from '../../../../queries/queries';

import styles from './styles';

class CommentForm extends Component {
  static propTypes = {
    user: PropTypes.object,
    coffeeshopID: PropTypes.string,
  };

  static defaultProps = {
    user: null,
    coffeeshopID: '',
  };

  state = {
    text: '',
  };

  render() {
    const { user, coffeeshopID } = this.props;
    const { text } = this.state;

    return user.userID ? (
      <Mutation mutation={ADD_COMMENT}>
        {addComment => (
          <form
            onSubmit={e => {
              e.preventDefault();
              addComment({
                variables: {
                  authorID: user.userID,
                  authorDisplayName: user.userDisplayName,
                  text,
                  id: coffeeshopID,
                },
              });
            }}
          >
            <textarea
              className={css(styles.textArea)}
              name="addComment"
              id="addComment"
              cols="30"
              rows="10"
              placeholder="Add a Comment..."
              value={text}
              onChange={e => this.setState({ text: e.target.value })}
            />
            <Button type="submit">Add Comment</Button>
          </form>
        )}
      </Mutation>
    ) : (
      <p>Please log in to leave a comment</p>
    );
  }
}

export default CommentForm;
