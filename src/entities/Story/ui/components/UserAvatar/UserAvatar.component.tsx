import {useTheme} from '@react-navigation/native';
import {Image} from 'expo-image';
import React, {PropsWithChildren} from 'react';
import {Pressable, Text, View} from 'react-native';
import {UserAvatarProps} from '../../../model/types/types';
import {createStyles} from './styles';

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
      {border && <View style={styles.borderWrapper} />}
      <Image
        style={styles.image}
        placeholder={{blurhash}}
        source={{uri: avatar}}
      />
      {children}
    </Pressable>
  );
}
