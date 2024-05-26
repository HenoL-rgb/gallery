import {useAppSelector} from '@app/providers/StoreProvider';
import {Photo} from '@entities/Post';
import {Story, UserAvatar} from '@entities/Story';
import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  Modal,
  View,
  ViewToken,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {useAnimations} from '../model/lib/useAnimations.hook';
import {ModalState} from '../model/types/types';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const width = Dimensions.get('screen').width;

export default function Stories() {
  const [open, setOpen] = useState<ModalState>({
    x: 0,
    y: 0,
    visible: false,
  });
  const stories = useAppSelector(state => state.gallerySlice.fullPosts);
  const error = useAppSelector(state => state.gallerySlice.error);

  const [storyIndex, setStoryIndex] = useState<number>(0);
  const [viewedStories, setViewedStories] = useState<string[]>([]);
  const {top} = useSafeAreaInsets();

  const {exiting, entering} = useAnimations({}, open.x, open.y);

  const listRef = useRef<FlatList>(null);

  function onFinish(index: number) {
    listRef.current?.scrollToIndex({index: index + 1, animated: true});
  }

  function handleClose() {
    setOpen({visible: false, x: 0, y: 0});
    setStoryIndex(0);
  }

  function handleOpen(e: GestureResponderEvent, index: number) {
    setStoryIndex(index);
    setOpen({
      x: e.nativeEvent.pageX,
      y: e.nativeEvent.pageY,
      visible: true,
    });
  }

  const onViewableItemsChanged = useCallback(
    (info: {
      viewableItems: ViewToken<Photo>[];
      changed: ViewToken<Photo>[];
    }) => {
      if (info.viewableItems[0].index !== null) {
        const item = info.viewableItems[0].item;
        setStoryIndex(info.viewableItems[0].index);
        if (!viewedStories.includes(item.id)) {
          setViewedStories([...viewedStories, item.id]);
        }
      }
    },
    [viewedStories],
  );

  const renderUser = useCallback(
    ({item, index}: {item: Photo; index: number}) => (
      <UserAvatar
        onClick={e => handleOpen(e, index)}
        avatar={item.user.profile_image.large}
        blurhash={item.blur_hash}
        border
        viewed={viewedStories.includes(item.id)}
      />
    ),
    [viewedStories],
  );

  const renderStory = useCallback(
    ({item, index}: {item: Photo; index: number}) => (
      <Story
        photo={item}
        width={width}
        inView={index === storyIndex}
        onFinish={() => onFinish(index)}
        onClose={handleClose}
      />
    ),
    [storyIndex],
  );

  if(error) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        horizontal
        data={stories}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderUser}
      />
      <Modal visible={open.visible} transparent onRequestClose={handleClose}>
        <Animated.View
          style={{paddingTop: top}}
          entering={entering}
          exiting={exiting}>
          <FlatList
            horizontal
            pagingEnabled
            bounces={false}
            scrollToOverflowEnabled={false}
            onViewableItemsChanged={onViewableItemsChanged}
            data={stories}
            ref={listRef}
            initialScrollIndex={storyIndex}
            disableIntervalMomentum={true}
            renderItem={renderStory}
            keyExtractor={item => item.id}
            snapToAlignment="end"
            decelerationRate="fast"
            snapToInterval={width}
            getItemLayout={(data, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
          />
        </Animated.View>
      </Modal>
    </View>
  );
}
