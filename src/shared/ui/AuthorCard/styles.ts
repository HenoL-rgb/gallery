import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: 15,
      paddingVertical: 7,
      columnGap: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 30,
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: 14,
      color: theme.colors.text,
      fontWeight: '700',
    },
  });
