import { createSelector } from '@reduxjs/toolkit';

const selectVenueState = state => state.venue;
const selectAvState = state => state.av;
const selectMealsState = state => state.meals;

// Memoized selector to get only the selected venue items
export const selectFilteredVenueItems = createSelector(
  [selectVenueState],
  (venueItems) => venueItems.filter(item => item.quantity > 0)
);

// Memoized selector to get only the selected AV items
export const selectFilteredAvItems = createSelector(
  [selectAvState],
  (avItems) => avItems.filter(item => item.quantity > 0)
);

// Memoized selector to get only the selected meal items
export const selectFilteredMealsItems = createSelector(
  [selectMealsState],
  (mealsState) => mealsState.items.filter(item => item.selected)
);

// Selector to get the number of people for meals
export const selectNumberOfPeople = createSelector(
  [selectMealsState],
  (mealsState) => mealsState.numberOfPeople
);

// Memoized selectors to calculate costs
export const selectVenueTotalCost = createSelector(
  [selectVenueState],
  (venueItems) => venueItems.reduce((total, item) => total + (item.cost * item.quantity), 0)
);

export const selectAvTotalCost = createSelector(
  [selectAvState],
  (avItems) => avItems.reduce((total, item) => total + (item.cost * item.quantity), 0)
);

export const selectMealsTotalCost = createSelector(
  [selectMealsState],
  (mealsState) => mealsState.totalCost
);

// Final selector to calculate the grand total
export const selectGrandTotal = createSelector(
  [selectVenueTotalCost, selectAvTotalCost, selectMealsTotalCost],
  (venueCost, avCost, mealsCost) => venueCost + avCost + mealsCost
);