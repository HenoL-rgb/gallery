import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainApp from './src/app/MainApp';
import {RouterProvider} from '@app/providers/RouterProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StoreProvider} from '@app/providers/StoreProvider';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = React.createContext({
  theme: DefaultTheme,
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState<Themes>(Themes.DARK);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

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
              <SafeAreaView style={{flex: 1}}>
                <MainApp />
              </SafeAreaView>
            </GestureHandlerRootView>
          </RouterProvider>
        </StoreProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}

export default App;
