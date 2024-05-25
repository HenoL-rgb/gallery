import { postSlice } from '@entities/Post';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gallerySlice } from '@widgets/Gallery';

const rootReducer = combineReducers({
  gallerySlice,
  postSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
