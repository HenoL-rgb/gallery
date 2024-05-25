import { DefaultTheme } from '@react-navigation/native';

export const LightTheme: Theme = {
    ...DefaultTheme,
    colors: {
      background: '#f6f7f9',
      primary: '#3563e9',
      secondary: '#ffffff',
      accent: '#1a202c',
      card: '#ffffff',
      text: '#000000',
      border: '#1a202c',
      notification: '#5caffc',
      error: '#ED3F3F',
      searchBorder: 'rgba(195,212,233,0.4)',
    },
  };
  
  export const DarkTheme: Theme = {
    ...DefaultTheme,
    colors: {
      background: '#f6f7f9',
      primary: '#3563e9',
      secondary: '#ffffff',
      accent: '#1a202c',
      card: '#ffffff',
      text: '#1a202c',
      border: '#1a202c',
      error: '#ED3F3F',
      notification: '#5caffc',
      searchBorder: 'rgba(195,212,233,0.4)',
    },
  };
  
  export type Theme = typeof DefaultTheme & {
    colors: {
      secondary: string;
      accent: string;
      error: string;
      searchBorder: string;
    };
  };