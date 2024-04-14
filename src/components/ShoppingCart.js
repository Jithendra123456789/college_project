// src/components/ShoppingCart.js
import React, { useContext } from "react";
//import { CartContext } from "../context/CartContext";

const ShoppingCart = () => {
  //const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - Quantity: {item.quantity}
        </div>
      ))} */}
    </div>
  );
};

export default ShoppingCart;
