import {Photo} from '@entities/Post';
import {DimensionValue, GestureResponderEvent} from 'react-native';

export interface StoryProps {
  photo: Photo;
  width: DimensionValue;
  inView: boolean;
  onFinish: () => void;
  onClose: () => void;
}

export interface ProgressBarProps {
  inView: boolean;
  onFinish: () => void;
}

export interface UserAvatarProps {
  avatar: string;
  blurhash: string;
  border?: boolean;
  viewed?: boolean;
  small?: boolean;
  username?: string;
  onClick?: (e: GestureResponderEvent) => void;
}

export interface SingleStoryProps extends Photo {}
