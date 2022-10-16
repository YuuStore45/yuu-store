import axios from "axios";

// const url = process.env.NODE_ENV === 'development ? "http://localhost:4848" : import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: "http://localhost:4848",
});

export default api;
