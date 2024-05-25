import { PostCard } from '@entities/Post';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
    MainRouterParams,
    MainRoutes,
} from '@shared/config/routeConfig/routeConfig';
import React from 'react';
import { Pressable } from 'react-native';
import { GalleryPostCardProps } from '../model/types/types';
import { styles } from './styles';


type Navigation = NavigationProp<MainRouterParams>;

export default function GalleryPostCard(props: GalleryPostCardProps) {
  const navigation = useNavigation<Navigation>();

  function handleNavigate() {
    navigation.navigate(MainRoutes.POST, {id: props.id});
  }

  return (
    <Pressable
      style={({pressed}) => [styles.wrapper, {opacity: pressed ? 0.6 : 1}]}
      onPress={handleNavigate}>
      <PostCard {...props} />
    </Pressable>
  );
}
