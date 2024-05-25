import React, { useEffect, useRef, useState } from 'react';
import {FlatList} from 'react-native';
import {data} from './data';
import { useAppSelector } from '@app/providers/StoreProvider';
import { RootState } from '@app/providers/StoreProvider/config/store';
import { GalleryPostCard } from '@features/GalleryPostCard';

export default function Gallery() {
  const posts = useAppSelector((state: RootState) => state.gallerySlice.posts);
  const [page, setPage] = useState<number>(1);
  const hasMore = useRef<boolean>(true);

  useEffect(() => {}, [page]);

  return (
    <FlatList
      contentContainerStyle={{gap: 2}}
      columnWrapperStyle={{gap: 2}}
      numColumns={3}
      data={data.slice(0, 9)}
      renderItem={({item}) => <GalleryPostCard {...item} />}
      keyExtractor={item => item.id}
    />
  );
}
