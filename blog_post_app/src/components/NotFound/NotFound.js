import React from "react";
import Navbar from "../Navbar/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar showAddPost={false} />
      <div
        className="hero-blog-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/error-404.jpg`,
        }}
      ></div>
    </>
  );
};

export default NotFound;
