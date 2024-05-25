import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createStyles } from './styles';

export default function PageLoader() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={styles.indicator.color} size={24} />
    </View>
  );
}
