import { configureStore } from '@reduxjs/toolkit';
import { bookedReducer, searchReducer } from './slice'

export const store = configureStore({
  reducer: {
    BookedHotels: bookedReducer,
    search: searchReducer,
    // loader: loadingReducer,
  },
});
