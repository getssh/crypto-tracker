import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './homeSlice';

const store = configureStore({
  reducer: {
    trending: trendingReducer,
  }
});

export default store;