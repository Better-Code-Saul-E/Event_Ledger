import { createSlice } from "@reduxjs/toolkit";
import { AV_DATA } from "./conference.data";

export const avSlice = createSlice({
  name: "av",
  initialState: AV_DATA,

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrementAvQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity--;
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
