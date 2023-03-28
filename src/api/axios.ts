import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_KEY,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = process.env.ACCESS_TOKEN;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
