import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Cards from "../../components/Cards/Cards";
import { useSelector } from "react-redux";

const Home = () => {
  // Retrieve unsorted blog data from Redux state
  const unsortedBlogData = useSelector((state) => state.blog.blogData);

  // Sort the blogData array by date in descending order
  const blogData = [...unsortedBlogData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      {/* Render the Navbar with the option to add a new post button */}
      <Navbar showAddPost={true} />
      {/* Render the HeroSection component */}
      <HeroSection />
      {/* Render the Cards component with sorted blogData */}
      <Cards blogData={blogData} />
    </>
  );
};

export default Home;
