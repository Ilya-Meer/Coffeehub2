import { StyleSheet } from 'aphrodite/no-important';
import { fontFamilyMain, baseSpacingUnit } from '../../../global/styles';

export default StyleSheet.create({
  heading: {
    margin: `${baseSpacingUnit / 2}px 0`,
    fontFamily: fontFamilyMain,
    fontWeight: 500,
    fontSize: baseSpacingUnit * 4,
    textTransform: 'uppercase',
  },
});
