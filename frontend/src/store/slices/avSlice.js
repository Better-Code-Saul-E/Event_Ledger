import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAvItems } from "../../services/conferenceService";
import { AV_FALLBACK_DATA } from "../../utils/conference.data";

export const getAvItems = createAsyncThunk(
  'av/getAvItems',
  async () => {
    try {
      const data = await fetchAvItems();
      return data.map(item => ({ ...item, quantity: 0 }));
    } catch (error) {
      console.warn("Python Server is down. Switching to Offline Mode.");
      return AV_FALLBACK_DATA;
    }
  });

export const avSlice = createSlice({
  name: "av",
  initialState: {
    items: [],
    // possible values: 'idle', 'loading', 'succeeded', 'failed'
    status: 'idle',
    error: null,
  },

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrementAvQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 0) item.quantity--;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAvItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAvItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getAvItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
