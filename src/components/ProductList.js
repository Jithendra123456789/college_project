// src/components/ProductListing.js
import React from "react";
import { Link } from "react-router-dom";
import faker from "faker"; // Import faker
import "../styles/ProductListing.css";
import Header from "./Header";
import Footer from "./Footer";
const generateFakeProduct = (id) => ({
  id,
  name: faker.commerce.productName(),
  description: faker.lorem.paragraph(),
  price: faker.commerce.price(),
  imageUrl: faker.image.imageUrl(),
  specifications: [
    faker.random.words(),
    faker.random.words(),
    faker.random.words(),
  ],
});

const ProductListing = () => {
  // Generate an array of 10 fake products
  const fakeProducts = Array.from({ length: 10 }, (_, index) =>
    generateFakeProduct(index + 1)
  );

  return (
    <>
      <Header></Header>
      <div className="product-listing-container">
        <h2>Product Listing Page</h2>
        <div className="product-tiles">
          {fakeProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-tile"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductListing;
