import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"; // Import the auth slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your auth slice to the store
  },
});

export default store;
