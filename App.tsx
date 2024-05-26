import React, {useState} from 'react';

import {RouterProvider} from '@app/providers/RouterProvider';
import {StoreProvider} from '@app/providers/StoreProvider';
import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainApp from './src/app/MainApp';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextValues {
  theme: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Themes>>;
}

export const ThemeContext = React.createContext<ThemeContextValues>({
  theme: DefaultTheme,
});

function App(): React.JSX.Element {
  const [theme, setTheme] = useState<Themes>(Themes.DARK);

  const themeData = {
    theme: theme === Themes.LIGHT ? DefaultTheme : DarkTheme,
    setTheme,
  };

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={themeData}>
        <StoreProvider>
          <RouterProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <MainApp />
            </GestureHandlerRootView>
          </RouterProvider>
        </StoreProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
