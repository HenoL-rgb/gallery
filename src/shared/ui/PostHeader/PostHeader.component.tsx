import {useNavigation, useTheme} from '@react-navigation/native';
import {ArrowLeft} from '@shared/assets/icons';
import React from 'react';
import {Pressable, View} from 'react-native';
import {createStyles} from './styles';

export default function PostHeader() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => [styles.backButton, {opacity: pressed ? 0.6 : 1}]}
        onPress={() => navigation.goBack()}>
        <ArrowLeft
          strokeWidth={1}
          width={20}
          height={20}
          stroke={theme.colors.text}
        />
      </Pressable>
    </View>
  );
}
