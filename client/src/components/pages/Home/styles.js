import { StyleSheet } from 'aphrodite/no-important';
import { fontFamilyMain, colours } from '../../../global/styles';

export default StyleSheet.create({
  tagline: {
    margin: '5px 0',
    position: 'relative',
    fontFamily: fontFamilyMain,
    fontWeight: 400,
    '::after': {
      content: "''",
      width: 100,
      height: 2,
      position: 'absolute',
      top: 40,
      left: 0,
      backgroundColor: colours.dark,
    },
  },
  pageTitle: {
    margin: '2.5em 0',
  },
});
