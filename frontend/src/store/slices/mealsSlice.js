import { createSlice } from '@reduxjs/toolkit';
import { MEALS_DATA } from '../../utils/conference.data';

const calculateTotal = (items, numPeople) => {
  const selectedCost = items.reduce((total, item) => total + (item.selected ? item.cost : 0), 0);
  return selectedCost * numPeople;
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    items: MEALS_DATA,
    numberOfPeople: 1,
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
});

export const { toggleMealSelection, setNumberOfPeople } = mealsSlice.actions;

export default mealsSlice.reducer;
