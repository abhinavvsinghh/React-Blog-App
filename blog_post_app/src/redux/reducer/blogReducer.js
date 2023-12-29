// Redux slice using @reduxjs/toolkit for managing blog data
import { createSlice } from "@reduxjs/toolkit";
import { blogData as initialBlogData } from "../../data/blogData";

// Create a blog slice with initial state and reducers
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogData: initialBlogData,
  },
  reducers: {
    // Reducer to add a new blog to the state
    addBlog: (state, action) => {
      state.blogData.push(action.payload);
    },
    // Reducer to edit an existing blog in the state
    editBlog: (state, action) => {
      const { id, updatedBlog } = action.payload;
      const blogIndex = state.blogData.findIndex((blog) => blog.id === id);
      if (blogIndex !== -1) {
        state.blogData[blogIndex] = {
          ...state.blogData[blogIndex],
          ...updatedBlog,
        };
      }
    },
    // Reducer to delete a blog from the state
    deleteBlog: (state, action) => {
      const idToDelete = action.payload;
      state.blogData = state.blogData.filter((blog) => blog.id !== idToDelete);
    },
    // Reducer to increment the like count of a blog
    likeBlog: (state, action) => {
      const blogId = action.payload;
      const blog = state.blogData.find((blog) => blog.id === blogId);
      if (blog) {
        blog.likes += 1;
      }
    },
  },
});

// Export action creators and reducer from the blog slice
export const { addBlog, editBlog, deleteBlog, likeBlog } = blogSlice.actions;
export default blogSlice.reducer;
