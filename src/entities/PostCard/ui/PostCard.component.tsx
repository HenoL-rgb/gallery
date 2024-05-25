import {View, Text} from 'react-native';
import React from 'react';
import {Photo} from '../model/types/types';
import {styles} from './PostCard.styles';
import {Image} from 'expo-image';

export default function PostCard({urls, blur_hash}: Photo) {
  console.log(blur_hash);
  return (
    <View style={styles.wrapper}>
      <Image
        placeholder={{blurhash: blur_hash}}
        source={{uri: urls.regular}}
        contentFit="fill"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
}
