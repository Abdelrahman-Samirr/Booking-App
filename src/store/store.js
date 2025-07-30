import { configureStore } from '@reduxjs/toolkit';
import { bookedReducer, searchReducer, loadingReducer  } from './slice'

export const store = configureStore({
  reducer: {
    BookedHotels: bookedReducer,
    search: searchReducer,
    loader: loadingReducer,
  },
});
