import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ArrowLeft} from '@shared/assets/icons';
import {createStyles} from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';

export default function PostHeader() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => [
          styles.backButton,
          {opacity: pressed ? 0.6 : 1},
        ]}
        onPress={() => navigation.goBack()}
        >
        <ArrowLeft
          strokeWidth={1}
          width={20}
          height={20}
          stroke="#ffffff"

        />
      </Pressable>
    </View>
  );
}
