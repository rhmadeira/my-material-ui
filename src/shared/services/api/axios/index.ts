import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@token")}`,
  },
});

// export const api = axios.create({
//   baseURL: `${import.meta.env.VITE_PARCEIROS_BASE_URL}`,
// });
