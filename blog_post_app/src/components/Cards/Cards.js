import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";

const Cards = ({ blogData }) => {
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogData = blogData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle Next button click
  const nextBtn = () => {
    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle Prev button click
  const prevBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="cards-section" className="cards">
      {/* Heading for the Cards section */}
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* Map through the currentBlogData and display CardItem for each blog */}
          {currentBlogData.map((blog) => (
            <ul className="cards__items" key={blog.id}>
              <CardItem blog={blog} />
            </ul>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="pagination">
          {/* Previous button */}
          <button className="prev" onClick={prevBtn}>
            <img src="/images/arrow.png" alt="back" />
            Prev
          </button>
          {/* Page number links */}
          <ul className="page-ul">
            {Array.from(
              { length: Math.ceil(blogData.length / itemsPerPage) },
              (_, index) => (
                <li
                  className={`${
                    currentPage === index + 1
                      ? "page-li link active"
                      : "page-li link"
                  } `}
                  key={index}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
          {/* Next button */}
          <button className="next" onClick={nextBtn}>
            Next
            <img src="/images/arrow.png" alt="back" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
