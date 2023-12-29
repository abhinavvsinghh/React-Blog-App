import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ blog }) => {
  // Hook for navigating to a specific blog post page
  const navigate = useNavigate();

  // Function to handle card click and navigate to the blog post page
  const handleClick = () => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <>
      {/* List item representing an individual blog card */}
      <li className="cards__item">
        <div className="cards__item__link" onClick={handleClick}>
          {/* Figure element for the blog card image */}
          <figure
            className="cards__item__pic-wrap"
            data-category={`${blog.author} - ${blog.date}`}
          >
            {/* Image element for the blog card */}
            <img className="cards__item__img" alt="Travel" src={blog.src} />
          </figure>
          {/* Container for blog card information */}
          <div className="cards__item__info">
            {/* Heading for the blog card */}
            <h5 className="cards__item__text">{blog.title}</h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardItem;
