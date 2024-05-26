import {DimensionValue, StyleSheet} from 'react-native';

export const createStyles = (width: DimensionValue) =>
  StyleSheet.create({
    wrapper: {
      width: width,
      backgroundColor: 'green',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    avatar: {
      position: 'absolute',
      top: 25,
      left: 10,
    },
    close: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 25,
    }
  });
