import { useAppDispatch } from '@app/providers/StoreProvider';
import { InteractivePhoto, Photo, postActions } from '@entities/Post';
import { useTheme } from '@react-navigation/native';
import { Heart } from '@shared/assets/icons';
import React, { useState } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  BounceIn,
  ZoomOut,
  runOnJS
} from 'react-native-reanimated';
import { styles } from './styles';

export default function DoubleTapPhoto(props: Photo) {
  const [doubleTapped, setDoubleTapped] = useState<boolean>(false);
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const tap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      runOnJS(handleDoubleTap)();
    });

  function handleDoubleTap() {
    dispatch(postActions.setLike(true));
    setDoubleTapped(true);
  }

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={styles.wrapper}>
        <InteractivePhoto {...props} />
        {doubleTapped && (
          <Animated.View
            entering={BounceIn.duration(400).withCallback(() =>
              runOnJS(setDoubleTapped)(false),
            )}
            style={styles.heartWrapper}
            exiting={ZoomOut.duration(200)}>
            <Heart
              stroke={theme.colors.primary}
              fill={theme.colors.primary}
              width={100}
              height={100}
            />
          </Animated.View>
        )}
      </Animated.View>
    </GestureDetector>
  );
}
