import {Header} from '@shared/ui/Header';
import {Gallery} from '@widgets/Gallery';
import React from 'react';
import {View} from 'react-native';
import {createStyles} from './styles';
import {Stories} from '@widgets/Stories';
import {useTheme} from '@react-navigation/native';

export default function HomeScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.wrapper}>
      <Header />
      <Stories />
      <Gallery />
    </View>
  );
}
