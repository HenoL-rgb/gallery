import {View, Text} from 'react-native';
import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {
  MainRouterParams,
  MainRoutes,
} from '@shared/config/routeConfig/routeConfig';
import {HomeScreen} from '@screens/HomeScreen';
import PostScreen from '@screens/PostScreen/ui/PostScreen.screen';

const Stack = createStackNavigator<MainRouterParams>();

export default function MainRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ScaleFromCenterAndroid,
      }}>
      <Stack.Screen name={MainRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={MainRoutes.POST} component={PostScreen} />
    </Stack.Navigator>
  );
}
