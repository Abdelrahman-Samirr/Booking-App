import axios from "axios";

export const axiosInterceptor = axios.create({
  // baseURL: "https://booking-app-db.vercel.app/"
  baseURL: "https://booking-app-server-production.up.railway.app/"
});