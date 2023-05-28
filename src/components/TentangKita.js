import "./TentangKita.css";
import React, { useState } from "react";

export default function TentangKita() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container-kita">
      <div
        className={`image-container-us ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <img
          src="./images/10.png"
          alt="Hover Me"
          className="responsive-image"
        />
        {isHovered && (
          <div className="video-overlay">
            <video className="popup-video" autoPlay muted>
              <source src="./videos/hover.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </div>
      <div className="ktp">
        <img alt="imagelol" src="/images/5.png" className="image1" />
        <img alt="imagelol" src="/images/6.png" className="image2" />
        <img alt="imagelol" src="/images/7.png" className="image3" />
      </div>
    </div>
  );
}
