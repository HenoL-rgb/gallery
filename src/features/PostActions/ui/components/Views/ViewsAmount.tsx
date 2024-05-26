import {useTheme} from '@react-navigation/native';
import {Views} from '@shared/assets/icons';
import {formatNumber} from '@shared/lib/formatNumber';
import React from 'react';
import {Text, View} from 'react-native';
import {createStyles} from './styles';

interface ViewsProps {
  viewsAmount: number;
}

export default function ViewsAmount({viewsAmount}: ViewsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <Views width={20} height={20} stroke={theme.colors.text} />
      <Text style={styles.text}>{formatNumber(viewsAmount)}</Text>
    </View>
  );
}
