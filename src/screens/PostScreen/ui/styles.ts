import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    container: {
        height: '100%',
    }
  });
