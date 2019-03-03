import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

const Button = ({ children, type, variant }) => (
  <button type={type} className={css(styles.button, styles[variant])}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  type: 'button',
  variant: 'primary',
};

export default Button;
