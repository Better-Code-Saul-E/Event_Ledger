import { configureStore } from '@reduxjs/toolkit';
import avReducer from './slices/avSlice';
import mealsReducer from './slices/mealsSlice';
import venueReducer from './slices/venueSlice'

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer
  },
});
