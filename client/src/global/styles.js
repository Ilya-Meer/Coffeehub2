import { StyleSheet } from 'aphrodite';

// layout

export const baseSpacingUnit = 10;

// fonts

export const fontFamilyMain = 'Spectral';

// colours

export default StyleSheet.create({
  bodyText: {
    fontFamily: fontFamilyMain,
    fontWeight: 500,
    fontSize: baseSpacingUnit * 1.8,
  },
});
