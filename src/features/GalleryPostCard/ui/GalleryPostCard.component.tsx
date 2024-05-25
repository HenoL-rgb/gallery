import {PostCard} from '@entities/PostCard';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {GalleryPostCardProps} from '../model/types/types';
import {Dimensions} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

export default function GalleryPostCard(props: GalleryPostCardProps) {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler = Gesture.Pinch()
    .onStart(event => {
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    })
    .onUpdate(event => {
      scale.value = event.scale;
    })
    .onEnd(() => {
      scale.value = withTiming(1);
    });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -SCREEN_WIDTH / 2},
        {translateY: -SCREEN_HEIGHT / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: SCREEN_WIDTH / 2},
        {translateY: SCREEN_HEIGHT / 2},
      ],
    };
  });

  return (
    <GestureDetector gesture={pinchHandler}>
      <Animated.View style={[{flex: 1}, animatedImageStyle]}>
        <PostCard {...props} />
      </Animated.View>
    </GestureDetector>
  );
}
