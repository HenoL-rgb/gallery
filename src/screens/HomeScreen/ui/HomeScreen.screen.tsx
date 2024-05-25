import { Header } from '@shared/ui/Header';
import { Gallery } from '@widgets/Gallery';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export default function HomeScreen() {

  return (
    <View style={styles.wrapper}>
      <Header />
      <Gallery />
    </View>
  );
}
