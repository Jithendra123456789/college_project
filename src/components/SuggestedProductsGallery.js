// src/components/SuggestedProductsGallery.js
import React from "react";
import "../styles/SuggestedProductsGallery.css";

const SuggestedProductsGallery = ({ suggestedProducts, onClose }) => {
  return (
    <div className="suggested-products-gallery">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <div className="gallery-images">
        {suggestedProducts.map((product) => (
          <img key={product.id} src={product.imageUrl} alt={product.name} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedProductsGallery;
