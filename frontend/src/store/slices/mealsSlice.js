import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMeals } from '../../services/conferenceService';
import { MEALS_DATA } from '../../utils/conference.data';

const calculateTotal = (items, numPeople) => {
  const selectedCost = items.reduce((total, item) => total + (item.selected ? item.cost : 0), 0);
  return selectedCost * numPeople;
}

export const getMeals = createAsyncThunk("meals/getMeals", async () => {
  try {
    const data = await fetchMeals();
    return data.map(item => ({ ...item, selected: false }));
  } catch (error) {
    console.warn("Python Server is down. Switching to Offline Mode.");
    return MEALS_DATA;
  }
})

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    items: [],
    numberOfPeople: 1,
    // possible values: 'idle', 'loading', 'succeeded', 'failed'
    status: 'idle',
    error: null
  },
  reducers: {
    toggleMealSelection: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.selected = !item.selected;
      }
    },
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload >= 1 ? action.payload : 1;
      state.totalCost = calculateTotal(state.items, state.numberOfPeople);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getMeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export const { toggleMealSelection, setNumberOfPeople } = mealsSlice.actions;

export default mealsSlice.reducer;
