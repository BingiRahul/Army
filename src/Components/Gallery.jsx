import React from "react";
import "./Gallery.css";
import G_Image from "../Images/G_Image.jpg";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <div className="gallery-text">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-subtitle">Glimpses of the Indian Air Force</p>
          <div className="gallery-buttons">
            <button className="gallery-button">Photo Gallery</button>
            <br/>
            <button className="gallery-button">Video Gallery</button>
          </div>
        </div>
        <div className="gallery-image">
          <img
            src={G_Image} // Replace with the actual image URL
            alt="Gallery"
            className="right-side-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
