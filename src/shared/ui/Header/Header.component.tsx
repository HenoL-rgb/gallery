import {View, Text} from 'react-native';
import React from 'react';
import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';

export default function Header() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Gallery</Text>
    </View>
  );
}
