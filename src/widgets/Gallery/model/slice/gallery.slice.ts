import {Photo} from '@entities/PostCard';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type State = {
  posts: Photo[];
  error?: string;
};

const initialState: State = {
  posts: [],
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Photo[]>) {
      state.posts = action.payload;
    },
  },
});

export const {actions: galleryActions} = gallerySlice;
