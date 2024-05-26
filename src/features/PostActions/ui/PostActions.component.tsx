import React from 'react';
import {View} from 'react-native';
import {PostActionsProps} from '../model/types/types';
import DownloadsAmount from './components/Downloads/Downloads.component';
import LikeButton from './components/LikeButton/LikeButton.component';
import ViewsAmount from './components/Views/ViewsAmount';
import {styles} from './styles';

export default function PostActions({
  downloadsAmount = 0,
  viewsAmount = 0,
  likedByUser = false,
  id,
}: PostActionsProps) {
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
