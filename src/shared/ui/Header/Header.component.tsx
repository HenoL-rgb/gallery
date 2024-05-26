import {View, Text, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';
import {ThemeContext, Themes} from 'App';
import {Moon, Sun} from '@shared/assets/icons';
import Animated, {RotateInDownLeft, RotateInUpRight} from 'react-native-reanimated';

export default function Header() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const {setTheme} = useContext(ThemeContext);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Gallery</Text>
      <Pressable
        style={styles.switcher}
        onPress={() => setTheme?.(theme.dark ? Themes.LIGHT : Themes.DARK)}>
        {theme.dark ? (
          <Animated.View key="sun" entering={RotateInDownLeft}>
            <Sun width={20} height={20} stroke={theme.colors.text} />
          </Animated.View>
        ) : (
          <Animated.View key="moon" entering={RotateInUpRight}>
            <Moon width={20} height={20} stroke={theme.colors.text} />
          </Animated.View>
        )}
      </Pressable>
    </View>
  );
}
