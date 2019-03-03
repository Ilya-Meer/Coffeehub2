import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

const Page = ({ children }) => (
  <div className={css(styles.page)}>{children}</div>
);

export default Page;

Page.propTypes = {
  children: PropTypes.any,
};

Page.defaultProps = {
  children: null,
};
