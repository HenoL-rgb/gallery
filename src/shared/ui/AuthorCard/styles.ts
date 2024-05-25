import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      columnGap: 5,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 30,
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: 16,
      color: theme.colors.text,
    },
  });
