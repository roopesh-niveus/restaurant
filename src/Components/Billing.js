import React, { useState, useEffect } from "react";
import "./BillingAddress.css";

const Billing = () => {
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  useEffect(() => {
    // Retrieve the billing address from localStorage
    const storedBillingAddress = localStorage.getItem("billingAddress");

    // If the billing address is stored, parse and set it in the state
    if (storedBillingAddress) {
      setBillingAddress(JSON.parse(storedBillingAddress));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the billing address in localStorage
    localStorage.setItem("billingAddress", JSON.stringify(billingAddress));
  };

  return (
    <div className="billing-address-container">
      <h2 className="billing-address-heading">Billing Address</h2>
      <form className="billing-address-form" onSubmit={handleSubmit}>
        <label className="form-label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={billingAddress.firstName}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={billingAddress.lastName}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Address Line 1:
          <input
            type="text"
            name="addressLine1"
            value={billingAddress.addressLine1}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Address Line 2:
          <input
            type="text"
            name="addressLine2"
            value={billingAddress.addressLine2}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          City:
          <input
            type="text"
            name="city"
            value={billingAddress.city}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          State:
          <input
            type="text"
            name="state"
            value={billingAddress.state}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={billingAddress.postalCode}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="form-submit-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default Billing;
