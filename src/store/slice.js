import { createSlice } from '@reduxjs/toolkit';


const getUserId = () => {

    const user = JSON.parse(localStorage.getItem("userData"));
    return user?.id || "guest";

};
const loadFromLocalStorage = () => {
  const userId = getUserId();
    const saved = localStorage.getItem(`bookings_${userId}`)
    return saved ? JSON.parse(saved) : [];
}
const hotelsInitialState = {
  hotelsArr: loadFromLocalStorage(),
};

const bookedHotelsSlice = createSlice({
  name: 'hotels',
  initialState : hotelsInitialState,
  reducers: {
    bookedHotel: (state, action) => {
      state.hotelsArr.push(action.payload)
      const userId = getUserId();
      localStorage.setItem(`bookings_${userId}`, JSON.stringify(state.hotelsArr));
    },
    cancelHotel: (state, action) => {
      state.hotelsArr = state.hotelsArr.filter(hotel => hotel.id !== action.payload)
      const userId = getUserId();
      localStorage.setItem(`bookings_${userId}`, JSON.stringify(state.hotelsArr));
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

// const loadingInitialState = {
//   recommended: false,
//   offers: false,
//   Hotels: false
// };

// const loadingSlice = createSlice({
//   name: 'loading',
//   initialState: loadingInitialState,
//   reducers: {
//     setRecommendedLoading: (state, action) => {
//       state.recommended = action.payload;
//     },
//     setOffersLoading: (state, action) => {
//       state.offers = action.payload;
//     },
//     setHotelsLoading: (state, action) => {
//       state.Hotels = action.payload;
//     },
//   },
// });



export const { bookedHotel, cancelHotel } = bookedHotelsSlice.actions;
export const { setSearchTerm, setSelectedCountry } = searchSlice.actions;
// export const { setRecommendedLoading, setOffersLoading, setHotelsLoading } = loadingSlice.actions;

export const bookedReducer = bookedHotelsSlice.reducer;
export const searchReducer = searchSlice.reducer;
// export const loadingReducer = loadingSlice.reducer;