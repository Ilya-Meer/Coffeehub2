import { StyleSheet } from 'aphrodite/no-important';
import { fontFamilyMain } from '../../../../global/styles';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  p: {
    width: '100%',
    fontFamily: fontFamilyMain,
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 9999,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  image: {
    maxWidth: '250px',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.2s',
    },
  },
});
