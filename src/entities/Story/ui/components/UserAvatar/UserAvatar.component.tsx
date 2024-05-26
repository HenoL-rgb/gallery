import {View, Text, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {UserAvatarProps} from '../../../model/types/types';
import {createStyles} from './styles';
import {Image, ImageBackground} from 'expo-image';
import {useTheme} from '@react-navigation/native';

export default function UserAvatar({
  avatar,
  blurhash,
  border = false,
  small = false,
  viewed = false,
  username,
  children,
  onClick,
}: PropsWithChildren<UserAvatarProps>) {
  const theme = useTheme();
  const styles = createStyles(viewed, theme);

  if (small) {
    return (
      <View style={styles.smallWrapper}>
        <View style={styles.smallImageWrapper}>
          <Image
            style={styles.image}
            placeholder={{blurhash}}
            source={{uri: avatar}}
          />
        </View>
        {username && <Text style={styles.username}>{username}</Text>}
      </View>
    );
  }

  return (
    <Pressable onPress={onClick} style={styles.bigWrapper}>
      <View style={styles.borderWrapper}></View>
      <Image
        style={styles.image}
        placeholder={{blurhash}}
        source={{uri: avatar}}
      />
      {children}
    </Pressable>
  );
}
