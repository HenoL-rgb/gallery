import {Image} from 'expo-image';
import React from 'react';
import {Pressable, View} from 'react-native';
import {StoryProps} from '../model/types/types';
import ProgressBar from './components/ProgressBar/ProgressBar.component';
import UserAvatar from './components/UserAvatar/UserAvatar.component';
import {createStyles} from './styles';
import {Cross} from '@shared/assets/icons';
import {CommonColors} from '@shared/lib/constants';

export default function Story({
  photo,
  width,
  inView,
  onFinish,
  onClose,
}: StoryProps) {
  const styles = createStyles(width);

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        placeholder={{blurhash: photo.blur_hash}}
        source={{uri: photo.urls.regular}}
      />
      <View style={styles.avatar}>
        <UserAvatar
          blurhash={photo.blur_hash}
          avatar={photo.user.profile_image.medium}
          small
          username={photo.user.username}
        />
      </View>
      <Pressable style={styles.close} onPress={onClose}>
        <Cross
          stroke={CommonColors.white}
          strokeLinejoin="round"
          strokeLinecap="round"
          width={15}
          height={15}
        />
      </Pressable>
      <ProgressBar inView={inView} onFinish={onFinish} />
    </View>
  );
}
