import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MainRouterParams,
  MainRoutes,
} from '@shared/config/routeConfig/routeConfig';
import {Post} from '@widgets/Post';
import Animated from 'react-native-reanimated';

type Props = StackScreenProps<MainRouterParams, MainRoutes.POST>;

export default function PostScreen({navigation, route}: Props) {
  if (!route.params.id) {
    return (
      <View>
        <Text>Id is not provided</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Animated.View>
        <Post id={route.params.id} />
      </Animated.View>
    </View>
  );
}
