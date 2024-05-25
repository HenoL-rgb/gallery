import {Theme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 10,
    },
    text: {
      color: theme.colors.text,
    },
    refetchText: {
      color: theme.colors.background,
    },
    refetch: {
      width: 150,
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
  });
