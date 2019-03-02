import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';
import styles from './styles';

const Subheading = ({ children }) => (
  <h1 className={css(styles.subheading)}>{children}</h1>
);

Subheading.propTypes = {
  children: PropTypes.any,
};

Subheading.defaultProps = {
  children: null,
};

export default Subheading;
