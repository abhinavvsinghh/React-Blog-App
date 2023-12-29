// Redux store configuration using @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../reducer/blogReducer";

// Create and export the Redux store
const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
