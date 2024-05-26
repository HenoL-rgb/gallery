import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 10,
      backgroundColor: theme.colors.background,
    },
    backButton: {
      padding: 5,
    },
  });
