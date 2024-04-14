// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import Header from "./Header";
import Footer from "./Footer";
import FastCheckoutForm from "./FastCheckoutForm"; // Add the FastCheckoutForm import

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <Header />
      <div className="cart-sections">
        {/* Cart Items Section */}
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.productId}</p>
                    <p>{item.id}</p>
                    <button
                      className="remove-from-cart"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fast Checkout Form Section */}
        <div className="fast-checkout-form-section">
          <FastCheckoutForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
