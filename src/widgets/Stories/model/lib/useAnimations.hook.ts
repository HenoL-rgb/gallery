import {useCallback} from 'react';
import {StyleProps, withTiming} from 'react-native-reanimated';

export const useAnimations = (values: StyleProps, x: number, y: number) => {
  const exiting = useCallback(
    (values: StyleProps) => {
      'worklet';

      const animations = {
        originX: withTiming(-values.windowWidth / 2 + x, {duration: 300}),
        originY: withTiming(-values.windowHeight / 2 + y, {duration: 300}),
        opacity: withTiming(0, {duration: 300}),
        transform: [
          {
            scale: withTiming(0.2, {duration: 300}),
          },
        ],
      };

      const initialValues = {
        originX: 0,
        originY: 0,
        opacity: 1,
        transform: [
          {
            scale: 1,
          },
        ],
      };
      return {
        initialValues,
        animations,
      };
    },
    [x, y],
  );

  const entering = useCallback(
    (values: StyleProps) => {
      'worklet';

      const animations = {
        originX: withTiming(0, {duration: 300}),
        originY: withTiming(0, {duration: 300}),
        transform: [
          {
            scale: withTiming(1, {duration: 300}),
          },
        ],
      };

      const initialValues = {
        originX: -values.windowWidth / 2 + x,
        originY: -values.windowHeight / 2 + y,
        transform: [
          {
            scale: 0.2,
          },
        ],
      };
      return {
        initialValues,
        animations,
      };
    },
    [x, y],
  );

  return {exiting, entering};
};
