import axios from "axios";
import BASE_URL from "./apiConfig";

export const getReviews = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/dashboard/reviews`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch reviews", err);
    throw err;
  }
};

export const getReviewTrends = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard/review-trends`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch review trends", error);
    throw error;
  }
};