import type { Theme } from '@app/providers/ThemeProvider/lib/ThemeContext';

declare module '@react-navigation/native' {
  export function useTheme(): Theme;
}

declare module '*.svg' {
  import React from 'react';
    import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
