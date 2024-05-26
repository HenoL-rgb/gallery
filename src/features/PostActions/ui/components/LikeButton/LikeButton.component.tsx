import {useAppDispatch} from '@app/providers/StoreProvider';
import {postActions} from '@entities/Post';
import {useTheme} from '@react-navigation/native';
import {Heart} from '@shared/assets/icons';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';

interface LikeButtonProps {
  liked: boolean;
  id: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function LikeButton({liked, id}: LikeButtonProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState<boolean>();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleLike() {
    if (!id) return;

    if (liked) {
      dispatch(postActions.setLike(false));
    } else {
      dispatch(postActions.setLike(true));
    }
  }

  if (liked) {
    return (
      <AnimatedPressable
        key="unliked"
        onPress={handleLike}
        entering={mounted ? BounceIn.duration(400) : undefined}>
        <Heart
          stroke={theme.colors.primary}
          fill={theme.colors.primary}
          width={30}
          height={30}
        />
      </AnimatedPressable>
    );
  }

  return (
    <AnimatedPressable
      key="liked"
      onPress={handleLike}
      entering={mounted ? BounceIn.duration(400) : undefined}>
      <Heart
        stroke={theme.colors.text}
        strokeWidth={1}
        width={30}
        height={30}
      />
    </AnimatedPressable>
  );
}
