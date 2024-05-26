import React from 'react';
import {MainRouter} from './providers/RouterProvider';
import {useTheme} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MainApp() {
  const theme = useTheme();
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <MainRouter />
    </SafeAreaView>
  );
}
