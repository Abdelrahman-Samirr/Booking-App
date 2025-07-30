import axios from "axios";

export const axiosInterceptor = axios.create({
  // baseURL: "https://booking-app-db.vercel.app/"
  baseURL: "http://localhost:3000/"
});