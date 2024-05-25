import {Image} from 'expo-image';
import React from 'react';
import {Dimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Photo} from '../../model/types/types';
import {styles} from './styles';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

export default function InteractivePost({blur_hash, urls}: Photo) {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const startFocalX = useSharedValue(0);
  const startFocalY = useSharedValue(0);

  const pinchHandler = Gesture.Pinch()
    .onStart(event => {
      focalX.value = event.focalX;
      focalY.value = event.focalY;
      startFocalX.value = event.focalX;
      startFocalY.value = event.focalY;
    })
    .onUpdate(event => {
      focalX.value = event.focalX;
      focalY.value = event.focalY;
      scale.value =
        event.scale < 0.75 ? 0.75 : event.scale > 2 ? 2 : event.scale;
    })
    .onEnd(() => {
      scale.value = withTiming(1);
      focalX.value = 0;
      focalY.value = 0;
    });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // {translateX: SCREEN_WIDTH / 2},
        // {translateY: SCREEN_HEIGHT / 2},
        {scale: scale.value},

        // {translateX: -SCREEN_WIDTH / 2},
        // {translateY: -SCREEN_HEIGHT / 2},
      ],
      transformOrigin: [startFocalX.value, startFocalY.value, 0],
    };
  });

  return (
    <GestureDetector gesture={pinchHandler}>
      <Animated.View style={[styles.wrapper, animatedImageStyle]}>
        <Image
          placeholder={{blurhash: blur_hash}}
          source={{uri: urls.regular}}
          contentFit="cover"
          style={styles.image}
        />
      </Animated.View>
    </GestureDetector>
  );
}
