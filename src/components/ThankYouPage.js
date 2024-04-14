// ThankYouPage.js

import React from "react";
import "../styles/ThankYouPage.css"; // Import the styles
import Header from "./Header";
import Footer from "./Footer";

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <Header></Header>
      <h1 className="thank-you-heading">Thank You for Your Purchase!</h1>
      <p className="thank-you-message">
        We appreciate your business. Your order has been successfully placed.
      </p>
      <div className="order-details">
        <h2>Order Details:</h2>
        {/* Display order details such as order number, items, etc. */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ThankYouPage;
