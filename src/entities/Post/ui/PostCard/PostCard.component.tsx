import {Image} from 'expo-image';
import React from 'react';
import {View} from 'react-native';
import {PostCardProps} from '../../model/types/types';
import {styles} from './PostCard.styles';

export default function PostCard({urls, blur_hash}: PostCardProps) {
  return (
    <View style={styles.wrapper}>
      <Image
        placeholder={{blurhash: blur_hash}}
        source={{uri: urls.regular}}
        contentFit="cover"
        style={styles.image}
      />
    </View>
  );
}
