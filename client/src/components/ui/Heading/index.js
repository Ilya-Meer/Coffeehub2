import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

const Heading = ({ children }) => (
  <h1 className={css(styles.heading)}>{children}</h1>
);

Heading.propTypes = {
  children: PropTypes.any,
};

Heading.defaultProps = {
  children: null,
};

export default Heading;
