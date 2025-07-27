// store.js
import { configureStore } from '@reduxjs/toolkit';
import { hotelReducer } from './slice'

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});
