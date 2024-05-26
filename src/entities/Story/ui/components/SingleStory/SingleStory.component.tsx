import {View, Text} from 'react-native';
import React from 'react';
import {SingleStoryProps} from '@entities/Story/model/types/types';
import {Image} from 'expo-image';
import {styles} from './styles';

export default function SingleStory({blur_hash, urls}: SingleStoryProps) {
  return (
    <View style={styles.wrapper}>
      <Image
        placeholder={{blurhash: blur_hash}}
        source={{uri: urls.regular}}
        style={styles.image}
      />
    </View>
  );
}