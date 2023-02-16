import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './walletSlice';
import { cryptsApi } from './redux_tk_query';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    [cryptsApi.reducerPath]: cryptsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptsApi.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
