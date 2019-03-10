import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import { Query } from 'react-apollo';

import CommentForm from './CommentForm';
import Page from '../../layout/Page';
import Heading from '../../ui/Heading';
import Subheading from '../../ui/Subheading';

import { GET_SINGLE_COFFEESHOP } from '../../../queries/queries';

import styles from './styles';

class ShowShopPage extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { match, user } = this.props;

    return (
      <Query query={GET_SINGLE_COFFEESHOP} variables={{ id: match.params.id }}>
        {({ data, loading }) => {
          if (loading) {
            return <h1 style={{ color: 'white' }}>Loading data...</h1>;
          }

          const { coffeeshop: shop } = data;

          return (
            <Page>
              <div className={css(styles.pageTitle)}>
                <Heading>{shop.name}</Heading>
              </div>
              <img src={shop.image} alt="Coffeeshop" />
              <div>
                <Subheading>Comments</Subheading>
                {shop.comments.map(comment => (
                  <p key={comment.author}>{comment.text}</p>
                ))}
              </div>

              <div>
                <Link to="/create">Add a new shop!</Link>
              </div>

              <CommentForm user={user} coffeeshopID={match.params.id} />
            </Page>
          );
        }}
      </Query>
    );
  }
}

export default ShowShopPage;
