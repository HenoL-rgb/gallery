import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    indicator: {
      color: theme.colors.primary,
    },
  });
