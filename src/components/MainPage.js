import React, { useState, useEffect } from "react";
import "../App.css";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { getByDisplayValue } from "@testing-library/react";

function MainPage() {
  const images = [
    "../KitaPhoto1.jpg",
    "../KitaPhoto2.jpg",
    "../KitaPhoto3.jpg",
    "../KitaPhoto4.jpg",
    "../KitaPhoto5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(goToNextImage, 2000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  function goToPreviousImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  }

  function goToNextImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="hero-container">
      <video src="../videos/video-1.mp4" autoPlay loop muted />
      <div className="hero-btns">
        <div className="btns">
          <Link to="/lineup" className="lineupbtn">
            <img
              src="/images/logodiamond.png"
              alt="Logo"
              className="spin-image"
            />
            <p>LINEUP</p>
          </Link>
        </div>

        <div className="btns">
          <Link to="/aboutus" className="aboutusbtn">
            <img
              src="/images/logodiamond.png"
              alt="Logo"
              className="spin-image"
            />
            <p>ABOUT US</p>
          </Link>
        </div>

        <div className="btns">
          <Link to="/agentinfo" className="aboutusbtn">
            <img
              src="/images/logodiamond.png"
              alt="Logo"
              className="spin-image"
            />
            <p>AGENTS</p>
          </Link>
        </div>
      </div>
      <div className="homedecor">
        <div className="homephoto">
          <img src="../HomePicture.png" alt="Home Photo" />
        </div>
        <div className="kita-slider">
          <button className="prev-button-kita" onClick={goToPreviousImage}>
            &#8249;
          </button>
          <img
            src={images[currentImageIndex]}
            alt="Slider Image"
            className="kitaslider-image"
          />
          <button className="next-button-kita" onClick={goToNextImage}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
