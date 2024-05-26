import {View, Text, LayoutChangeEvent} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {createStyles} from './styles';
import { format, parseISO } from 'date-fns';

interface PostDescriptionProps {
  username: string;
  tags: {title: string; type: string}[];
  desc: string;
  likes: number;
  createdAt: string;
}

export default function PostDescription({
  username,
  tags,
  desc,
  likes,
  createdAt,
}: PostDescriptionProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const textRef = useRef<Text>(null);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.username}>{likes.toLocaleString('en-US')} likes</Text>
      <Text ref={textRef} textBreakStrategy="highQuality" style={styles.text}>
        <Text style={styles.username}>{username} </Text>
        {desc}
      </Text>
      <View style={styles.tags}>
        <Text textBreakStrategy="highQuality">
          {tags.map(tag =>
            typeof tag.title === 'string' ? (
              <Text style={styles.tag} key={tag.title}>
                #{tag.title}{' '}
              </Text>
            ) : null,
          )}
        </Text>
      </View>
      <Text>{format(parseISO(createdAt), 'MMM d')}</Text>
    </View>
  );
}
