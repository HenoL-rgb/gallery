import {useTheme} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  MainRouterParams,
  MainRoutes,
} from '@shared/config/routeConfig/routeConfig';
import {ErrorPage} from '@shared/ui/ErrorPage';
import {PostHeader} from '@shared/ui/PostHeader';
import {Post} from '@widgets/Post';
import React from 'react';
import {ScrollView} from 'react-native';
import {createStyles} from './styles';

type Props = StackScreenProps<MainRouterParams, MainRoutes.POST>;

export default function PostScreen({route}: Props) {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (!route.params.id) {
    return <ErrorPage />;
  }

  return (
    <>
      <PostHeader />
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.container}>
        <Post id={route.params.id} />
      </ScrollView>
    </>
  );
}
