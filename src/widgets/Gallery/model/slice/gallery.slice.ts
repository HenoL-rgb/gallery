import {Photo} from '@entities/Post';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type State = {
  posts: Photo[];
  error?: string;
};

const initialState: State = {
  posts: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Photo[]>) {
      state.posts = action.payload;
    },
  },
});

export const {actions: galleryActions} = gallerySlice;
export default gallerySlice.reducer;