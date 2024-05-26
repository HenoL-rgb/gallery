import { Header } from '@shared/ui/Header';
import { Gallery } from '@widgets/Gallery';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Stories } from '@widgets/Stories';

export default function HomeScreen() {

  return (
    <View style={styles.wrapper}>
      <Header />
      <Stories />
      <Gallery />
    </View>
  );
}
