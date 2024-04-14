// src/components/FastCheckoutForm.js
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../styles/FastCheckoutForm.css";

const FastCheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [testCardDetails, setTestCardDetails] = useState({
    number: "4111111111111111",
    expiryMonth: "12",
    expiryYear: "2023",
    cvc: "737",
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      creditCardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      creditCardNumber: Yup.string().required("Required"),
      expirationDate: Yup.string().required("Required"),
      cvv: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic (e.g., send data to server)
      console.log("Form submitted with values:", values);
    },
  });

  const handleTestPayment = async () => {
    try {
      // Call your server endpoint or directly handle the test payment on the frontend
      console.log("Simulating test payment:", testCardDetails);

      // In a real-world scenario, you would send the payment details to your server
      // for additional security and handling through Adyen API.
    } catch (error) {
      console.error("Error handling test payment:", error);
    }
  };

  return (
    <div className="fast-checkout-form-container">
      <h2>Fast Checkout</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="error">{formik.errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="error">{formik.errors.address}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error">{formik.errors.phone}</div>
          )}
        </div>
        {/* Credit Card Details */}
        <div className="form-group">
          <label htmlFor="creditCardNumber">Credit Card Number:</label>
          <input
            type="text"
            id="creditCardNumber"
            name="creditCardNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.creditCardNumber}
          />
          {formik.touched.creditCardNumber &&
            formik.errors.creditCardNumber && (
              <div className="error">{formik.errors.creditCardNumber}</div>
            )}
        </div>

        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expirationDate}
          />
          {formik.touched.expirationDate && formik.errors.expirationDate && (
            <div className="error">{formik.errors.expirationDate}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cvv}
          />
          {formik.touched.cvv && formik.errors.cvv && (
            <div className="error">{formik.errors.cvv}</div>
          )}
        </div>

        <button type="button" onClick={handleTestPayment}>
          Pay Now (Test)
        </button>
      </form>
    </div>
  );
};

export default FastCheckoutForm;
