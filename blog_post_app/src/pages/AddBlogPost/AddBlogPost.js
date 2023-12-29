import React, { useState } from "react";
import "./AddBlogPost.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addBlog, editBlog } from "../../redux/reducer/blogReducer";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { getRandomImage } from "../../utils/RandomImage";

const AddBlogPost = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Edit Mode
  const blog = state && state.blog;
  const edit = state && state.edit;

  // State for form input fields
  const [author, setAuthor] = useState(blog ? blog.author : "");
  const [title, setTitle] = useState(blog ? blog.title : "");
  const [content, setContent] = useState(blog ? blog.content : "");

  // Edit Mode: get the original image src, else in Add Mode, get a random image src
  const [imageSrc] = useState(() => (blog ? blog.src : getRandomImage()));

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that title and content are not empty
    if (!title || !content) {
      toast.error("Author, Title, and Content are required!");
      return;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    // Create a new blog data object
    const newBlogData = {
      id: blog ? blog.id : Date.now(),
      author,
      title,
      content,
      src: imageSrc,
      likes: blog ? blog.likes : 0,
      date: blog ? blog.date : formattedDate,
    };

    // Dispatch the addBlog/editBlog action based on add/edit mode
    edit
      ? dispatch(editBlog({ id: blog.id, updatedBlog: newBlogData }))
      : dispatch(addBlog(newBlogData));

    // Clear form fields
    setAuthor("");
    setTitle("");
    setContent("");

    // Redirect based on add/edit mode
    edit ? navigate(`/blog/${blog.id}`, { state: { blog } }) : navigate("/");
    toast.success(`Blog ${edit ? "updated" : "added"} successfully!`);
  };

  return (
    <>
      {/* Render the Navbar with the option to add a new post button */}
      <Navbar showAddPost={false} />
      {/* Hero section for the blog */}
      <div
        className="hero-blog-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${imageSrc}`,
        }}
      >
        <div className="blog-container">
          <div className="blog-heading">
            {/* Conditional rendering for edit mode */}
            {edit ? (
              <>
                <h1>You're now in edit mode!</h1>
                <span className="meta">Make the changes below.</span>
              </>
            ) : (
              <>
                <h1>Add The New Adventurous Blog Post!</h1>
                <span className="meta">Add the details below.</span>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Form for adding/editing a blog post */}
      <div className="addBlog">
        <form className="addBlogForm" onSubmit={handleSubmit}>
          {/* Input field for author */}
          <div className="inputBox">
            <input
              type="text"
              className="addInput"
              placeholder="AUTHOR"
              autoFocus={true}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          {/* Input field for title */}
          <div className="inputBox">
            <input
              type="text"
              className="addInput"
              placeholder="TITLE"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* Textarea for content */}
          <div className="inputBox">
            <textarea
              type="text"
              placeholder="Write the content of the blog..."
              className="addInput addText"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          {/* Submit button */}
          <div>
            <button className="addSubmit" type="submit">
              {edit ? "EDIT POST" : "ADD POST"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlogPost;
