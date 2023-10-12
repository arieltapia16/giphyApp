import { configureStore } from '@reduxjs/toolkit';
import { giphyApi } from '../api/giphyApi';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [giphyApi.reducerPath]: giphyApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(giphyApi.middleware),
});

setupListeners(store.dispatch);
