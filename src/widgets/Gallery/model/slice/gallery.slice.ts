import {Photo, PostCardProps} from '@entities/Post';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {PER_PAGE} from '../lib/constants';

type State = {
  posts: PostCardProps[];
  fullPosts: Photo[];
  loading: boolean;
  hasMore: boolean;
  page: number;
  refreshing?: boolean;
  error?: string;
};

const initialState: State = {
  posts: [],
  fullPosts: [],
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
      const uniqueArray: PostCardProps[] = action.payload.reduce(
        (acc: PostCardProps[], currentValue) => {
          const existingItem: PostCardProps | undefined = acc.find(
            item => item.id === currentValue.id,
          );
          if (!existingItem) {
            acc.push(currentValue);
          }
          return acc;
        },
        [],
      );

      state.posts = uniqueArray;

      if (action.payload.length < PER_PAGE) {
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
      state.loading = false;
      state.error = undefined;
    },
    fetchMore(state) {
      if (state.hasMore && !state.loading) {
        state.page = state.page + 1;
        state.loading = true;
      }
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
      state.refreshing = false;
    },
    setFullPosts(state, action: PayloadAction<Photo[]>) {
      state.fullPosts = action.payload;
    },
  },
});

export const {actions: galleryActions} = gallerySlice;
export default gallerySlice.reducer;
