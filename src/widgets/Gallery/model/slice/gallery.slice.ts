import {Photo} from '@entities/Post';
import {PostCardProps} from '@entities/Post';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type State = {
  posts: PostCardProps[];
  loading: boolean;
  hasMore: boolean;
  page: number;
  refreshing?: boolean;
  error?: string;
};

const initialState: State = {
  posts: [],
  page: 1,
  loading: false,
  refreshing: false,
  hasMore: true,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<PostCardProps[]>) {
      state.posts = action.payload;

    console.log('STATE', state.posts.length)

      if (action.payload.length < 24) {
        state.hasMore = false;
      }
      state.loading = false;
      state.refreshing = false;
    },

    setInitial() {
      return {...initialState};
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      state.hasMore = true;
      state.loading = true;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      state.error = undefined;
    },
    setRefreshing(state, action: PayloadAction<boolean>) {
      state.refreshing = action.payload;
      state.error = undefined;
    },
    fetchMore(state) {
      if (state.hasMore && !state.loading) {
        state.page += 1;
        state.loading = true;
      }
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    }
  },
});

export const {actions: galleryActions} = gallerySlice;
export default gallerySlice.reducer;
