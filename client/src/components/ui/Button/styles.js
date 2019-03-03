import { StyleSheet } from 'aphrodite/no-important';
import { colours, fontFamilySecondary } from '../../../global/styles';

export default StyleSheet.create({
  button: {
    maxWidth: 200,
    margin: 0,
    padding: '12px 35px',
    fontSize: '12px',
    fontFamily: fontFamilySecondary,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s',
    ':hover': {
      transition: 'all 0.2s',
    },
  },
  primary: {
    color: colours.white,
    backgroundColor: colours.navy,
    border: `1px solid ${colours.navy}`,
    ':hover': {
      color: colours.navy,
      backgroundColor: colours.white,
      border: `1px solid ${colours.navy}`,
    },
  },
  secondary: {
    color: colours.navy,
    backgroundColor: colours.white,
    border: `1px solid ${colours.navy}`,
    ':hover': {
      color: 'red',
      backgroundColor: 'black',
      border: `1px solid ${colours.navy}`,
    },
  },
});
