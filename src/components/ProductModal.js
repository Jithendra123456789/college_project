// src/components/ProductModal.js
import React from "react";
import "../styles/ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal">
        <img src={product.imageUrl} alt={product.name} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductModal;
