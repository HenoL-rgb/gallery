import {View, Text} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {Heart} from '@shared/assets/icons';
import {useTheme} from '@react-navigation/native';

interface LikeButtonProps {
  liked: boolean;
}

export default function LikeButton({liked}: LikeButtonProps) {
  const theme = useTheme();

  if (!liked) {
    return (
      <Animated.View key="unliked">
        <Heart stroke="red" fill="red" width={30} height={30} />
      </Animated.View>
    );
  }
  
  return (
    <Animated.View key="liked">
      <Heart stroke={theme.colors.text} strokeWidth={1} width={30} height={30} />
    </Animated.View>
  );
}
