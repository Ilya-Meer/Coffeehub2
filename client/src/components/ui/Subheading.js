import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import { fontFamilyMain, baseSpacingUnit } from '../../global/styles';

const Subheading = ({ children }) => (
  <h1 className={css(styles.subheading)}>{children}</h1>
);

const styles = StyleSheet.create({
  subheading: {
    fontFamily: fontFamilyMain,
    fontWeight: 700,
    fontSize: baseSpacingUnit * 2.4,
  },
});

Subheading.propTypes = {
  children: PropTypes.any,
};

Subheading.defaultProps = {
  children: null,
};

export default Subheading;
