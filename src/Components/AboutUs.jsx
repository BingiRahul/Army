import React from "react";
import "./AboutUs.css";
import left from "../Images/Left.png";
import middle from "../Images/Middle.png";
import right from "../Images/Right.jpg";

const AboutUs = () => {
  return (
    <div className="gallery-container">
      {/* Title */}
      <div className="gallery-title-container">
        <h1 className="gallery-title">A CUT ABOVE</h1>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {/* Left Image */}
        <div className="gallery-item">
          <img src={left} alt="Our Journey" className="gallery-image" />
          <div className="overlay">
            <div className="overlay-text">Our Journey</div>
          </div>
        </div>

        {/* Middle Image */}
        <div className="gallery-item">
          <img src={middle} alt="Sunset Airplane" className="gallery-image" />
          <div className="overlay">
            <div className="overlay-text">Airplane Views</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="gallery-item">
          <img src={right} alt="Saluting Officers" className="gallery-image" />
          <div className="overlay">
            <div className="overlay-text">Saluting Officers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


