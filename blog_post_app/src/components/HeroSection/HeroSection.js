import React from "react";
import { Button } from "../Button/Button";
import "./HeroSection.css";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="cards-section" smooth={true} duration={500}>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Start Exploring Blogs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
