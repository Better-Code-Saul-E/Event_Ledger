import { createSelector } from '@reduxjs/toolkit';

export const selectVenueItems = state => state.venue.items;
export const selectAvItems = state => state.av.items;
export const selectMealsItems = state => state.meals.items;
export const selectMealsState = state => state.meals;

 
/* === Used by the Selectors === */
export const selectFilteredVenueItems = createSelector(
  [selectVenueItems],
  (venueItems) => venueItems.filter(venue => venue.quantity > 0)
);

export const selectFilteredAvItems = createSelector(
  [selectAvItems],
  (avItems) => avItems.filter(item => item.quantity > 0)
);

export const selectFilteredMealsItems = createSelector(
  [selectMealsItems],
  (meals) => meals.filter(meal => meal.selected)
);

export const selectNumberOfPeople = createSelector(
  [selectMealsState],
  (mealsState) => mealsState.numberOfPeople
);


/* === Used to calculate the costs === */
export const selectVenueTotalCost = createSelector(
  [selectVenueItems],
  (venueItems) => venueItems.reduce((total, item) => total + (item.cost * item.quantity), 0)
);

export const selectAvTotalCost = createSelector(
  [selectAvItems],
  (avItems) => avItems.reduce((total, item) => total + (item.cost * item.quantity), 0)
);

export const selectMealsTotalCost = createSelector(
  [selectMealsState],
  (mealsState) =>{
    const costPerPerson = mealsState.items
    .filter(item => item.selected)
    .reduce((total, item) => total + item.cost, 0);

    return costPerPerson * mealsState.numberOfPeople;
  }
);


/* === final price === */
export const selectGrandTotal = createSelector(
  [selectVenueTotalCost, selectAvTotalCost, selectMealsTotalCost],
  (venueCost, avCost, mealsCost) => venueCost + avCost + mealsCost
);