import React from "react";
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import { FaThumbsUp, FaEdit, FaTrash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./BlogDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, likeBlog } from "../../redux/reducer/blogReducer";

const BlogDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the latest blog data from Redux state
  const blogId = state && state.blog && state.blog.id;
  const blog = useSelector((state) =>
    state.blog.blogData.find((blog) => blog.id === blogId)
  );

  // Function to handle liking a blog post
  const handleLike = () => {
    dispatch(likeBlog(blog.id));
    toast("Thank you!", {
      icon: "👏",
    });
  };

  // Function to handle navigating to edit mode
  const handleEdit = () => {
    if (state && state.blog) {
      navigate("/add", { state: { blog, edit: "Edit" } });
      toast("You're now in edit mode!", {
        icon: "🖊️",
      });
    }
  };

  // Function to handle deleting a blog post
  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    navigate("/");
    toast.success("Blog deleted successfully!");
  };

  return (
    <>
      {/* Render the Navbar with the option to add a new post button*/}
      <Navbar showAddPost={false} />
      {/* Hero section for the blog */}
      <div
        className="hero-blog-container"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${blog.src}` }}
      >
        <div className="blog-container">
          <div className="blog-heading">
            {/* Display blog title and metadata */}
            <h1>{blog.title}</h1>
            <span className="meta">
              Posted by {blog.author} on {blog.date}
            </span>
          </div>
        </div>
        {/* Buttons for liking, editing, and deleting the blog */}
        <div className="blog-buttons">
          <div className="like" onClick={handleLike}>
            <FaThumbsUp className="like-button" />
            <span className="like-count">{blog.likes}</span>
          </div>
          <div className="edit-delete">
            <div className="edit" onClick={handleEdit}>
              <FaEdit className="edit-button" />
            </div>
            <div className="delete" onClick={handleDelete}>
              <FaTrash className="delete-button" />
            </div>
          </div>
        </div>
      </div>
      {/* Blog content section */}
      <article className="blog-container">
        <div className="blog-content">
          <p>{blog.content}</p>
        </div>
      </article>
    </>
  );
};

export default BlogDetails;
