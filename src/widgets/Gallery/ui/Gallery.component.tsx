import {PostCard} from '@entities/PostCard';
import React, { useEffect, useRef, useState } from 'react';
import {FlatList} from 'react-native';
import {data} from './data';
import { useAppSelector } from '@app/providers/StoreProvider';

export default function Gallery() {
  const posts = useAppSelector(state => state);
  console.log(posts)
  const [page, setPage] = useState<number>(1);
  const hasMore = useRef<boolean>(true);

  useEffect(() => {}, [page]);

  return (
    <FlatList
      contentContainerStyle={{gap: 2}}
      columnWrapperStyle={{gap: 2}}
      numColumns={3}
      data={data.slice(0, 9)}
      renderItem={({item}) => <PostCard {...item} />}
      keyExtractor={item => item.id}
    />
  );
}
