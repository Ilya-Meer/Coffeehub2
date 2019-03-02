import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import { fontFamilyMain, baseSpacingUnit } from '../../global/styles';

const Heading = ({ children }) => (
  <h1 className={css(styles.heading)}>{children}</h1>
);

const styles = StyleSheet.create({
  heading: {
    margin: `${baseSpacingUnit / 2}px 0`,
    fontFamily: fontFamilyMain,
    fontWeight: 500,
    fontSize: baseSpacingUnit * 4,
    textTransform: 'uppercase',
  },
});

Heading.propTypes = {
  children: PropTypes.any,
};

Heading.defaultProps = {
  children: null,
};

export default Heading;
