import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Photo} from '../types/types';

type State = {
  post?: Photo;
  error?: string;
  likes: string[];
};

const initialState: State = {
  likes: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<Photo>) {
      const post = action.payload;

      if (state.likes.includes(action.payload.id)) {
        post.liked_by_user = true;
        post.likes += 1;
      }

      state.post = post;

      state.error = undefined;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setLike(state, action: PayloadAction<boolean>) {
      if (!state.post) return;

      if (action.payload) {
        if (!state.likes.includes(state.post.id)) {
          state.post.liked_by_user = true;
          state.post.likes += 1;
          state.likes.push(state.post.id);
        }
      } else {
        state.post.liked_by_user = false;
        state.post.likes -= 1;
        state.likes = state.likes.filter(postId => postId !== state.post?.id);
      }
    },
  },
});

export const {actions: postActions} = postSlice;
export default postSlice.reducer;
