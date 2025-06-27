import axios from "axios";

import BASE_URL from "./apiConfig";

export const getDashboardStats = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard/stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};


export const getSeverityData = async () => {
  const response = await axios.get(`${BASE_URL}/dashboard/severity-summary`); // update URL as needed
  return response.data;
};
