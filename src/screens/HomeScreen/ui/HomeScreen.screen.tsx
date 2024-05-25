import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import {Gallery} from '@widgets/Gallery';
import {styles} from './styles';
import {Header} from '@shared/ui/Header';
import {useAppSelector} from '@app/providers/StoreProvider';

const PAGE_LENGTH = 30;

export default function HomeScreen() {
  const posts = useAppSelector(state => state.gallerySlice.posts);
  const [page, setPage] = useState<number>(1);
  const hasMore = useRef<boolean>(true);

  useEffect(() => {
    if (
      !data ||
      (data && (data.length === 0 || data.length % PAGE_LENGTH !== 0))
    ) {
      hasMore.current = false;
    } else {
      hasMore.current = true;
    }
  }, [data]);

  return (
    <View style={styles.wrapper}>
      <Header />
      <Gallery />
    </View>
  );
}
