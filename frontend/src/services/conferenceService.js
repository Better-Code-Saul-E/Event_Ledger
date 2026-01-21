import { apiClient } from "./apiClient";

export const fetchVenues = async () => apiClient.get("venues/")

export const fetchAvItems = async () => apiClient.get("av-items/")

export const fetchMeals = async () => apiClient.get("meals/")