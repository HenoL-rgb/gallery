import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainApp from './src/app/MainApp';
import {RouterProvider} from '@app/providers/RouterProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StoreProvider} from '@app/providers/StoreProvider';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = React.createContext({
  theme: DefaultTheme,
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const themeData = {
    theme: theme === Themes.LIGHT ? DefaultTheme : DarkTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      <RouterProvider>
        <StoreProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView style={backgroundStyle}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
              />
              <MainApp />
            </SafeAreaView>
          </GestureHandlerRootView>
        </StoreProvider>
      </RouterProvider>
    </ThemeContext.Provider>
  );
}

export default App;
