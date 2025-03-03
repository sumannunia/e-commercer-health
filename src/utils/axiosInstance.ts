import axios from "axios";
import { BASEURL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: BASEURL, // Set your backend API base URL here
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 5000, // 5-second timeout for all requests
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Check if the response contains a new token
    const newToken = response?.data?.token;
    console.log({ response });
    if (newToken) {
      // Update the token in localStorage and Redux state
      // localStorage.setItem("token", newToken);
      // store.dispatch(setToken(newToken));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
