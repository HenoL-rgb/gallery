import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Kanit-Italic',
      fontSize: 21,
      color: theme.colors.text,
      fontStyle: 'italic',
    },
  });
