import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: 15,
      rowGap: 10,
    },
    text: {
      fontSize: 14,
      color: theme.colors.text,
    },
    username: {
      fontSize: 14,
      color: theme.colors.text,
      fontWeight: '700',
    },
    tag: {
      color: theme.colors.text,
      opacity: 0.8,
    },
    tags: {
      opacity: 0.7,
    },
  });
