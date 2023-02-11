import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

// export const api = axios.create({
//   baseURL: `${import.meta.env.VITE_PARCEIROS_BASE_URL}`,
// });
