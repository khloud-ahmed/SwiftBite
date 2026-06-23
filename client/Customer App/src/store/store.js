import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // أي reducers تانية زي الكارت أو المنتجات ضيفيها هنا
  },
});

export default store;