// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './features/conference/slices/venueSlice';
import avReducer from './features/conference/slices/avSlice';
import mealsReducer from './features/conference/slices/mealsSlice';


export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer
  },
});
