import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens/HomeScreen';
import PostScreen from '@screens/PostScreen/ui/PostScreen.screen';
import {
  MainRouterParams,
  MainRoutes,
} from '@shared/config/routeConfig/routeConfig';
import React from 'react';

const Stack = createStackNavigator<MainRouterParams>();

export default function MainRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}>
      <Stack.Screen name={MainRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={MainRoutes.POST} component={PostScreen} />
    </Stack.Navigator>
  );
}
