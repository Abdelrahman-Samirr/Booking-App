import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels:[],
  selectedHotel: null,
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

export const { setHotels } = hotelSlice.actions;
export const hotelReducer = hotelSlice.reducer;