import {View, Text} from 'react-native';
import React from 'react';
import LikeButton from './components/LikeButton/LikeButton.component';
import {styles} from './styles';
import DownloadsAmount from './components/Downloads/Downloads.component';
import ViewsAmount from './components/Views/ViewsAmount';
import { PostActionsProps } from '../model/types/types';

export default function PostActions({downloadsAmount = 0, viewsAmount = 0, likedByUser = false, id}: PostActionsProps) {
  return (
    <View style={styles.wrapper}>
      <LikeButton liked={likedByUser} id={id} />
      <View style={styles.subActions}>
        <DownloadsAmount downloadsAmount={downloadsAmount} />
        <ViewsAmount viewsAmount={viewsAmount} />
      </View>
    </View>
  );
}
