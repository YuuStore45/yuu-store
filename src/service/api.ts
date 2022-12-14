import axios from "axios";

const url = process.env.NODE_ENV === "development" ? "http://localhost:4848" : process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: url,
});

export default api;
