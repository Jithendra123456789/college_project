// src/components/SuggestedProductsBanner.js
import React, { useState } from "react";
import ProductModal from "./ProductModal";
import "../styles/SuggestedProductsBanner.css";
import img1 from "../assets/cuimg5.jpg";
const SuggestedProductsBanner = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Sample suggested products data (replace with actual data)
  const suggestedProducts = [
    {
      id: 1,
      name: "Ev Vehicles",
      imageUrl: img1,
    },
    {
      id: 2,
      name: "3D Toys",
      imageUrl:
        "https://i.all3dp.com/wp-content/uploads/2022/10/27100225/lil-city-printables-e1682582615161.jpg",
    },
    {
      id: 3,
      name: "Books",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLSYXe-T91I31zdl9kxswE2hLIGDmJzdl8HYUkV4IBw&s",
    },
  ];
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="suggested-products-banner">
      <h3>Explore More Products</h3>
      <div className="suggested-products-list">
        {suggestedProducts.map((product) => (
          <div
            key={product.id}
            className="suggested-product"
            onClick={() => openModal(product)}
          >
            <img src={product.imageUrl} alt={product.name} width={300} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default SuggestedProductsBanner;
