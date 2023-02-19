import authSlice from './slice/auth/index';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
