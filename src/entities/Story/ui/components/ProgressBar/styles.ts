import { CommonColors } from '@shared/lib/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 6,
    left: 10,
    right: 10,
    height: 10,
    zIndex: 10,
    justifyContent: 'center',
  },
  bg: {
    width: '100%',
    height: 3,
    borderRadius: 5,
    backgroundColor: CommonColors.whiteTransparent,
  },
  progress: {
    top: -3,
    height: 3,
    borderRadius: 5,
    backgroundColor: CommonColors.white,
  },
});
