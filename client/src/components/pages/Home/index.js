import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { css } from "aphrodite/no-important";

import Page from "../../layout/Page";
import CoffeeshopList from "./CoffeeshopList";
import Heading from "../../ui/Heading";

import styles from "./styles";

class Home extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  static defaultProps = {
    history: null
  };

  render() {
    const { history } = this.props;

    return (
      <Page>
        <div className={css(styles.pageTitle)}>
          <Heading>Coffeeshops</Heading>
          <p className={css(styles.tagline)}>Browse all coffeeshops.</p>
        </div>
        <CoffeeshopList history={history} />
        <div>
          <Link to="/create">Add a new shop!</Link>
        </div>
      </Page>
    );
  }
}

export default Home;
