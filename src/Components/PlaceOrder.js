import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = ({ cartItems, totalPrice, handleCancelOrder }) => {
  return (
    <div className="place-order-container">
      <h3>Order Summary</h3>
      <div className="order-summary">
        
        <table className="order-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.food.name}</td>
                <td>{item.quantity}</td>
                <td>${(item.food.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          <span className="total-label">Total:</span>
          <span className="total-price">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
