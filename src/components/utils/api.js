import axios from "axios";

const api = axios.create({
  baseURL: "https://h3k.vercel.app/",
  // baseURL: "http://localhost:3000/",
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token")); // Assuming token is stored in localStorage
    // const token = user.token;
    console.log("this is token in api", token)
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
