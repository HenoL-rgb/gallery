import type {Theme} from '@app/providers/ThemeProvider/lib/ThemeContext';

declare module '@react-navigation/native' {
  export function useTheme(): Theme;
}
