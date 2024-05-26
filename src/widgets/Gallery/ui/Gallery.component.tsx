import {GalleryPostCard} from '@features/GalleryPostCard';
import {useTheme} from '@react-navigation/native';
import {ErrorPage} from '@shared/ui/ErrorPage';
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';
import {COLUMNS_AMOUNT} from '../model/lib/constants';
import {usePosts} from '../model/lib/usePosts.hook';
import {styles} from './styles';

export default function Gallery() {
  const {posts, fetchMore, refetch, loading, refreshing, error} = usePosts();
  const theme = useTheme();

  if (error) {
    return <ErrorPage error={error} refetch={refetch} loading={refreshing} />;
  }

  if (posts.length === 0 && !loading && !refreshing) {
    return (
      <ErrorPage
        error="Looks like there's nothing to show :("
        refetch={refetch}
        loading={refreshing}
      />
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
      showsVerticalScrollIndicator={false}
      numColumns={COLUMNS_AMOUNT}
      data={posts}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
      onEndReachedThreshold={1}
      onEndReached={fetchMore}
      renderItem={({item}) => <GalleryPostCard {...item} />}
      ListFooterComponent={
        loading ? (
          <ActivityIndicator
            size={24}
            color={theme.dark ? theme.colors.text : theme.colors.primary}
            style={styles.indicator}
          />
        ) : null
      }
      keyExtractor={item => item.id}
    />
  );
}
