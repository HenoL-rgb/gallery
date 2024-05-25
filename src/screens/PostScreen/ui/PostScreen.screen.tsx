import {useTheme} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MainRouterParams,
  MainRoutes,
} from '@shared/config/routeConfig/routeConfig';
import {Post} from '@widgets/Post';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {createStyles} from './styles';
import { ErrorPage } from '@shared/ui/ErrorPage';

type Props = StackScreenProps<MainRouterParams, MainRoutes.POST>;

export default function PostScreen({navigation, route}: Props) {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (!route.params.id) {
    return (
      <ErrorPage />
    );
  }

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
      <Post id={route.params.id} />
    </ScrollView>
  );
}
