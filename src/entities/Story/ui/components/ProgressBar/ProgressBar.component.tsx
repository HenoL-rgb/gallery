import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ProgressBarProps} from '../../../model/types/types';
import {styles} from './styles';

export default function ProgressBar({inView, onFinish}: ProgressBarProps) {
  const progress = useSharedValue(0);

  useDerivedValue(() => {
    if (progress.value === 1) {
      runOnJS(onFinish)();
    }
  }, [progress.value]);

  useEffect(() => {
    progress.value = 0;
    if (inView) {
      progress.value = withTiming(1, {
        duration: 6000,
        easing: Easing.linear,
      });
    }
  }, [inView]);

  const rStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.bg} />
      <Animated.View style={[styles.progress, rStyle]}></Animated.View>
    </View>
  );
}
