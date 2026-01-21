import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVenues } from "../../services/conferenceService";
import { VENUE_FALLBACK_DATA } from "../../utils/conference.data";

export const getVenues = createAsyncThunk("venue/getVenues", async () => {
  try {
    const data = await fetchVenues();
    return data.map(item => ({ ...item, quantity: 0 }));
  } catch (error) {
    console.warn("Python Server is down. Switching to Offline Mode.");
    return VENUE_FALLBACK_DATA;
  }
})

const venueSlice = createSlice({
  name: "venue",
  initialState: {
    items: [],
    // possible values: 'idle', 'loading', 'succeeded', 'failed'
    status: "idle",
    error: null,
  },
  reducers: {
    incrementVenueQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrementVenueQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 0) item.quantity--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVenues.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getVenues.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getVenues.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { incrementVenueQuantity, decrementVenueQuantity } = venueSlice.actions;

export default venueSlice.reducer;
