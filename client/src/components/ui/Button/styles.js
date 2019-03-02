import { StyleSheet } from 'aphrodite';
import { fontFamilyMain, baseSpacingUnit } from '../../../global/styles';

export default StyleSheet.create({
  button: {
    margin: 0,
    padding: '5px 20px',
    textTransform: 'uppercase',
  },
  primary: {
    color: 'red',
    backgroundColor: 'green',
  },
  secondary: {
    color: 'green',
    backgroundColor: 'red',
  },
});
