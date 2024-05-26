import { useTheme } from '@react-navigation/native';
import { Downloads } from '@shared/assets/icons';
import { formatNumber } from '@shared/lib/formatNumber';
import React from 'react';
import { Text, View } from 'react-native';
import { createStyles } from './styles';

interface DownloadsProps {
  downloadsAmount: number;
}

export default function DownloadsAmount({downloadsAmount}: DownloadsProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <Downloads width={20} height={20} stroke={theme.colors.text} />
      <Text style={styles.text}>{formatNumber(downloadsAmount)}</Text>
    </View>
  );
}
