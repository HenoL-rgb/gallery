import {View, Text, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {PostProps} from '../model/types/types';
import {InteractivePhoto, Photo, postActions} from '@entities/Post';
import {getPostByIdRequest} from '../../../entities/Post/model/services/getPostById.request';
import {AxiosError} from 'axios';
import {data} from './data';
import {useAppDispatch, useAppSelector} from '@app/providers/StoreProvider';
import { Heart } from '@shared/assets/icons';

export default function Post({id}: PostProps) {
  const post = useAppSelector(state => state.postSlice.post);
  const error = useAppSelector(state => state.postSlice.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //fetchPost(id);
  }, []);

  const fetchPost = useCallback(async (id: string) => {
    try {
      const post = await getPostByIdRequest({id});
      console.log(post.data);
      dispatch(postActions.setPost(post.data));
    } catch (e) {
      console.log(JSON.stringify(e));
      if (e instanceof AxiosError) {
        dispatch(postActions.setError(e.message));
      } else {
        dispatch(postActions.setError('Something went wrong :('));
      }
    }
  }, []);

  if (!post) {
    return (
      <View style={{flex: 1}}>
        <Text>Error occured</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <InteractivePhoto {...post} />
      <Heart />
    </View>
  );
}
