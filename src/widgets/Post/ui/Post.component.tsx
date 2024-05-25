import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {PostProps} from '../model/types/types';
import {InteractivePhoto, Photo, postActions} from '@entities/Post';
import {getPostByIdRequest} from '../../../entities/Post/model/services/getPostById.request';
import {AxiosError} from 'axios';
import {data} from './data';
import {useAppDispatch, useAppSelector} from '@app/providers/StoreProvider';
import {Heart} from '@shared/assets/icons';
import {PageLoader} from '@shared/ui/PageLoader';
import {ErrorPage} from '@shared/ui/ErrorPage';
import {AuthorCard} from '@shared/ui/AuthorCard';
import {PostDescription} from '@shared/ui/PostDescription';
import {PostActions} from '@features/PostActions';

export default function Post({id}: PostProps) {
  const post = useAppSelector(state => state.postSlice.post);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const error = useAppSelector(state => state.postSlice.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //fetchPost(id);
  }, []);

  const fetchPost = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      const post = await getPostByIdRequest({id});
      console.log(post.data);
      dispatch(postActions.setPost(post.data));
      setIsLoading(false);
    } catch (e) {
      console.log(JSON.stringify(e));
      if (e instanceof AxiosError) {
        dispatch(postActions.setError(e.message));
      } else {
        dispatch(postActions.setError('Something went wrong :('));
      }
    }
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!post || error) {
    return <ErrorPage />;
  }

  return (
    <View style={{flex: 1, rowGap: 5}}>
      <AuthorCard
        username={post.user.username}
        avatar={post.user.profile_image.medium}
        blurhash={post.blur_hash}
      />
      <InteractivePhoto {...post} />
      <PostActions />
      <PostDescription
        username={post.user.username}
        likes={post.likes}
        desc={post.description || ''}
        tags={post.tags}
      />
    </View>
  );
}
