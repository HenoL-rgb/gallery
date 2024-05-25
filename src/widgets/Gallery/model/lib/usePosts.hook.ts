import {useAppDispatch, useAppSelector} from '@app/providers/StoreProvider';
import {RootState} from '@app/providers/StoreProvider/config/store';
import {useState, useRef, useEffect} from 'react';
import {getPostsRequest} from '../services/getPosts.request';
import {galleryActions} from '../slice/gallery.slice';
import {AxiosError} from 'axios';

const PER_PAGE = 30;

export const usePosts = () => {
  const posts = useAppSelector((state: RootState) => state.gallerySlice.posts);
  const dispatch = useAppDispatch();
  const page = useAppSelector((state: RootState) => state.gallerySlice.page);
  const error = useAppSelector((state: RootState) => state.gallerySlice.error);
  const isLoading = useAppSelector(
    (state: RootState) => state.gallerySlice.loading,
  );
  const isRefreshing = useAppSelector(
    (state: RootState) => state.gallerySlice.refreshing,
  );
  const hasMore = useAppSelector(
    (state: RootState) => state.gallerySlice.hasMore,
  );

  useEffect(() => {
    console.log('USE EFFECT', page);
    fetchPosts(page);
  }, [page]);

  async function fetchPosts(page: number, invalidate?: boolean) {
    if (!hasMore || isLoading || isRefreshing) return;

    try {
      if (invalidate) {
        dispatch(galleryActions.setRefreshing(true));
      } else {
        dispatch(galleryActions.setLoading(true));
      }
      const newPosts = await getPostsRequest({
        page,
        per_page: PER_PAGE,
        invalidate,
      });

      const mappedPosts = newPosts.data.map(post => {
        console.log(post.id);
        return {
          urls: post.urls,
          blur_hash: post.blur_hash,
          id: post.id,
        };
      });

      if (page === 1) {
        dispatch(galleryActions.setPosts(mappedPosts));
        return;
      }

      dispatch(galleryActions.setPosts([...posts, ...mappedPosts]));
    } catch (error) {
      const message =
        error instanceof AxiosError ? error.message : 'Something went wrong :(';
      dispatch(galleryActions.setError(message));
    }
  }

  function refetch() {
    dispatch(galleryActions.setInitial());
    fetchPosts(1, true);
  }

  function fetchMore() {
    if (posts.length === 0) {
      return;
    }
    dispatch(galleryActions.fetchMore());
  }

  return {
    posts,
    fetchPosts,
    refetch,
    fetchMore,
    loading: isLoading,
    refreshing: isRefreshing || false,
    error
  };
};
