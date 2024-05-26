import {Theme} from '@react-navigation/native';
import {CommonColors} from '@shared/lib/constants';
import {StyleSheet} from 'react-native';

export const createStyles = (viewed: boolean, theme: Theme) =>
  StyleSheet.create({
    bigWrapper: {
      width: 60,
      height: 60,
      borderRadius: 60,
      objectFit: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    smallWrapper: {
      flexDirection: 'row',
      columnGap: 8,
      alignItems: 'center',
    },
    smallImageWrapper: {
      width: 30,
      height: 30,
      borderRadius: 30,
      objectFit: 'cover',
    },
    username: {
      fontSize: 14,
      color: CommonColors.white,
      fontWeight: '700',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 99,
    },
    borderWrapper: {
      position: 'absolute',
      width: 70,
      height: 70,
      borderWidth: 3,
      borderRadius: 70,
      borderColor: viewed
        ? CommonColors.whiteTransparent
        : theme.colors.primary,
    },
  });
