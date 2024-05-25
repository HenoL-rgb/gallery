import {GalleryPostCard} from '@features/GalleryPostCard';
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';
import {usePosts} from '../model/lib/usePosts.hook';
import {ErrorPage} from '@shared/ui/ErrorPage';

export default function Gallery() {
  const {posts, fetchMore, refetch, loading, refreshing, error} = usePosts();

  if (error) {
    return <ErrorPage error={error} refetch={refetch} loading={refreshing} />;
  }

  return (
    <FlatList
      contentContainerStyle={{gap: 2, paddingBottom: 70}}
      columnWrapperStyle={{gap: 2}}
      numColumns={3}
      data={posts}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
      onEndReachedThreshold={1}
      onEndReached={fetchMore}
      renderItem={({item}) => <GalleryPostCard {...item} />}
      ListFooterComponent={
        loading ? (
          <ActivityIndicator size={24} color="white" style={{marginTop: 10}} />
        ) : null
      }
      keyExtractor={item => item.id}
    />
  );
}
