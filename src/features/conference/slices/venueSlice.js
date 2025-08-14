// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { VENUE_DATA } from "./conference.data";

export const venueSlice = createSlice({
  name: "venue",
  initialState: VENUE_DATA,
  reducers: {
   
    incrementVenueQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrementVenueQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity--;
    },
  },
});

export const { incrementVenueQuantity, decrementVenueQuantity } = venueSlice.actions;

export default venueSlice.reducer;
