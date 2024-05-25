import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { gallerySlice } from '@widgets/Gallery';

const rootReducer = combineReducers({
  gallerySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
