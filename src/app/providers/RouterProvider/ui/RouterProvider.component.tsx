import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from 'App';
import React, { PropsWithChildren, useContext } from 'react';

export default function RouterProvider({children}: PropsWithChildren) {
  const theme = useContext(ThemeContext).theme;

  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
}
