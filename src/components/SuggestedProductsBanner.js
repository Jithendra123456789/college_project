// src/components/SuggestedProductsBanner.js
import React, { useState } from "react";
import SuggestedProductsGallery from "./SuggestedProductsGallery";
import "./SuggestedProductsBanner.css";

const SuggestedProductsBanner = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  // Sample suggested products data (replace with actual data)
  const suggestedProducts = [
    { id: 1, name: "Suggested Product 1", imageUrl: "/path/to/suggested1.jpg" },
    { id: 2, name: "Suggested Product 2", imageUrl: "/path/to/suggested2.jpg" },
    { id: 3, name: "Suggested Product 3", imageUrl: "/path/to/suggested3.jpg" },
  ];

  const openGallery = () => {
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <div className="suggested-products-banner">
      <h3>Explore More Products</h3>
      <div className="suggested-products-list">
        {suggestedProducts.map((product) => (
          <div
            key={product.id}
            className="suggested-product"
            onClick={openGallery}
          >
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      {isGalleryOpen && (
        <SuggestedProductsGallery
          suggestedProducts={suggestedProducts}
          onClose={closeGallery}
        />
      )}
    </div>
  );
};

export default SuggestedProductsBanner;
