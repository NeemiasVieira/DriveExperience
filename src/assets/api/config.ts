import axios from "axios";

const api = axios.create({
  baseURL: "https://api-driver-experience.vercel.app",
});

export default api;