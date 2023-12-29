import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./Navbar.css";

const Navbar = ({ showAddPost }) => {
  // State to manage the navbar's background color
  const [navbar, setNavbar] = useState(false);
  // Hook to enable navigation in React components
  const navigate = useNavigate();

  useEffect(() => {
    // Set the initial state based on the scroll position
    changeBackground();

    // Add event listener for scroll
    window.addEventListener("scroll", changeBackground);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // Function to update the navbar state based on the scroll position
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Function to handle the "NEW BLOG" button click
  const handleButtonClick = () => {
    navigate("/add"); // Navigate to the '/add' route
    // Display a toast notification for adding a new blog post
    toast("Add New Blog Post!", {
      icon: "🖊️",
    });
  };

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRAVEL BLOG
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
          </ul>
          {showAddPost && (
            // Conditional rendering of the "NEW BLOG" button
            <Button buttonStyle="btn--outline" onClick={handleButtonClick}>
              NEW BLOG
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
