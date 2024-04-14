// src/components/Banner.js
import React from "react";
import "../styles/Banner.css";

const Banner = ({ imageUrl, altText, bannerText }) => {
  return (
    <div className="banner-container">
      <img src={imageUrl} alt={altText} />
      {bannerText && <div className="banner-text">{bannerText}</div>}
    </div>
  );
};

export default Banner;
