// src/components/Footer.js
import React from "react";
import "../styles/Footer.css"; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="payment-methods">
        <img
          src="https://www.sleepcountry.ca/ccstore/v1/images/?source=/file/v2032545484190714294/general/visa_white.png"
          alt="Visa"
          className="payment-logo"
        />
        <img
          src="https://www.sleepcountry.ca/ccstore/v1/images/?source=/file/v797764428838518040/general/amex-2.png"
          alt="Mastercard"
          className="payment-logo"
        />
        <img
          src="https://www.sleepcountry.ca/ccstore/v1/images/?source=/file/v6701456853461936762/general/mastercard-white-2.png"
          alt="Apple Pay"
          className="payment-logo"
        />
        <img
          src="https://www.sleepcountry.ca/ccstore/v1/images/?source=/file/v4041984594515786065/general/paypal_white.png"
          alt="PayBright"
          className="payment-logo"
        />
      </div>
      {/* <p>Accepted Payment Methods: Visa, Mastercard, Apple Pay, PayBright</p> */}
    </footer>
  );
};

export default Footer;
