import {useTheme} from '@react-navigation/native';
import {Image} from 'expo-image';
import React from 'react';
import {Text, View} from 'react-native';
import {createStyles} from './styles';

interface AuthorCardProps {
  username: string;
  avatar: string;
  blurhash: string;
}

export default function AuthorCard({
  username,
  avatar,
  blurhash,
}: AuthorCardProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.wrapper}>
      <View style={styles.image}>
        {avatar && (
          <Image
            placeholder={{blurhash}}
            source={{uri: avatar}}
            style={styles.image}
          />
        )}
      </View>
      <Text style={styles.text}>{username}</Text>
    </View>
  );
}
