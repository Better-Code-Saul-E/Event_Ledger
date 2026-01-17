import { apiClient } from "./apiClient";
const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchVenues = async () => apiClient.get("venues/")

export const fetchAvItems = async () => apiClient.get("av-items/")

export const fetchMeals = async () => apiClient.get("meals/")