import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      columnGap: 5,
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      color: theme.colors.text,
    },
  });
