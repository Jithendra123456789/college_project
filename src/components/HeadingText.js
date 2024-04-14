// src/components/TextComponent.js
import React from "react";
import "../styles/HeadingText.css";

const HeadingText = ({ text }) => {
  return (
    <div className="text-container">
      <p className="italic-text">{text}</p>
    </div>
  );
};

export default HeadingText;
