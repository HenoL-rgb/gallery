import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Photo} from '../types/types';
import { data } from '@widgets/Post/ui/data';

type State = {
  post?: Photo;
  error?: string;
};

const initialState: State = {
    post: data
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<Photo>) {
      state.post = action.payload;
      state.error = undefined;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const {actions: postActions} = postSlice;
export default postSlice.reducer;
