import axios from "axios";
import { getToken } from "../auth";

export const BASE_URL = "http://localhost:4000/api/"; // Ensure this is the correct base URL

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
      console.log("Request config:", config); // Add logging
    }

    return config;
  },
  (error) => {
    console.error("Request error:", error); // Add logging
    return Promise.reject(error);
  }
);

privateAxios.interceptors.response.use(
  (response) => {
    console.log("Response data:", response.data); // Add logging
    return response;
  },
  (error) => {
    console.error("Response error:", error); // Add logging
    return Promise.reject(error);
  }
);
