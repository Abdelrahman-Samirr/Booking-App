import { createSlice } from '@reduxjs/toolkit';

const hotelsInitialState = {
  hotelsArr: [],
};

const bookedHotelsSlice = createSlice({
  name: 'hotels',
  initialState : hotelsInitialState,
  reducers: {
    bookedHotel: (state, action) => {
      state.BookedHotels.push(action.payload)
    },
    cancelHotel: (state, action) => {
      state.BookedHotels = state.BookedHotels.filter(hotel => hotel.id !== action.payload)
    }
    
  },
});

const searchInitialState = {
  searchTerm: '',
  selectedCountry:''
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCountry:(state, action) => {
      state.selectedCountry = action.payload
    }
  },
});


export const { bookedHotel, cancelHotel } = bookedHotelsSlice.actions;
export const { setSearchTerm, setSelectedCountry } = searchSlice.actions;

export const bookedReducer = bookedHotelsSlice.reducer;
export const searchReducer = searchSlice.reducer;