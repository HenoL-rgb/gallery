import {useAppDispatch, useAppSelector} from '@app/providers/StoreProvider';
import {postActions} from '@entities/Post';
import {DoubleTapPhoto, PostActions} from '@features/PostActions';
import {AuthorCard} from '@shared/ui/AuthorCard';
import {ErrorPage} from '@shared/ui/ErrorPage';
import {PageLoader} from '@shared/ui/PageLoader';
import {PostDescription} from '@shared/ui/PostDescription';
import {AxiosError} from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {getPostByIdRequest} from '../../../entities/Post/model/services/getPostById.request';
import {PostProps} from '../model/types/types';

export default function Post({id}: PostProps) {
  const post = useAppSelector(state => state.postSlice.post);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const error = useAppSelector(state => state.postSlice.error);
  const dispatch = useAppDispatch();

  const fetchPost = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      const post = await getPostByIdRequest({id});
      dispatch(postActions.setPost(post.data));
      setIsLoading(false);
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(postActions.setError(e.message));
      } else {
        dispatch(postActions.setError('Something went wrong :('));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPost(id);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!post || error) {
    return <ErrorPage />;
  }

  return (
    <ScrollView
      style={{flex: 1, rowGap: 5}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}>
      <AuthorCard
        username={post.user.username}
        avatar={post.user.profile_image.medium}
        blurhash={post.blur_hash}
      />
      <DoubleTapPhoto {...post} />
      <PostActions
        downloadsAmount={post.downloads}
        viewsAmount={post.views}
        likedByUser={post.liked_by_user}
        id={post.id}
      />
      <PostDescription
        username={post.user.username}
        likes={post.likes}
        desc={post.description || ''}
        tags={post.tags}
        createdAt={post.created_at}
      />
    </ScrollView>
  );
}
