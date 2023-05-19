import React, { useState } from "react";
import "./PaymentInfo.css";

const PaymentInfo = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment-related actions based on the selected payment method
    console.log("Selected Payment Method:", paymentMethod);
  };

  return (
    <div className="payment-info">
      <h3>Payment Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="payment-option">
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="upi">UPI</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="cod">Cash on Delivery (COD)</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="amazonPay"
            name="paymentMethod"
            value="amazonPay"
            checked={paymentMethod === "amazonPay"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="amazonPay">Amazon Pay</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="cardPayment"
            name="paymentMethod"
            value="cardPayment"
            checked={paymentMethod === "cardPayment"}
            onChange={handlePaymentChange}
          />
          <label htmlFor="cardPayment">Card Payment</label>
        </div>
      </form>
    </div>
  );
};

export default PaymentInfo;
