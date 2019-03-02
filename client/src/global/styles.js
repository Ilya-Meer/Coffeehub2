import { StyleSheet } from 'aphrodite';

// layout

const baseSpacingUnit = 10;

// fonts

const fontFamilyMain = 'Spectral';

// colours

export default StyleSheet.create({
  styledHeading: {
    fontFamily: fontFamilyMain,
    fontWeight: 500,
    fontSize: baseSpacingUnit * 4,
  },
  styledSubheading: {
    fontFamily: fontFamilyMain,
    fontWeight: 700,
    fontSize: baseSpacingUnit * 2.4,
  },
  bodyText: {
    fontFamily: fontFamilyMain,
    fontWeight: 500,
    fontSize: baseSpacingUnit * 1.8,
  },
});
