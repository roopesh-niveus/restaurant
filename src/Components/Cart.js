import React, { useState, useEffect } from "react";
import PlaceOrder from "./PlaceOrder";
import PaymentInfo from "./PaymentInfo";
import Billing from "./Billing";

const Cart = ({ cartItems, removeFromCart, setOrders }) => {
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      for (const item of cartItems) {
        totalPrice += item.food.price * item.quantity;
      }
      return totalPrice;
    };

    setTotalPrice(calculateTotalPrice());

    return () => {
      // Cleanup logic here (equivalent to componentWillUnmount)
    };
  }, [cartItems]);

  const handlePlaceOrder = () => {
    setShowPlaceOrder(true);
  };

  const handleCancelOrder = () => {
    setShowPlaceOrder(false);
  };

  const handleConfirmOrder = () => {
    const newOrders = cartItems.map((item) => {
      return {
        cartItems: [item],
        orderDateTime: new Date().toLocaleString(),
        status: "Placed",
      };
    });

    setOrders((prevOrders) => [...prevOrders, ...newOrders]);
    setOrderPlaced(true);

    setTimeout(() => {
      setOrders((prevOrders) => {
        const updatedOrders = prevOrders.map((order) => {
          if (
            newOrders.some(
              (newOrder) => newOrder.cartItems[0] === order.cartItems[0]
            )
          ) {
            return { ...order, status: "Delivered" };
          }
          return order;
        });
        return updatedOrders;
      });
    }, 1 * 60 * 1000); // 1 minute (1 * 60 seconds * 1000 milliseconds)
  };

  useEffect(() => {
    if (orderPlaced) {
      setTimeout(() => {
        setOrderPlaced(false);
      }, 60000);
    }
  }, [orderPlaced]);

  useEffect(() => {
    if (showPlaceOrder) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [showPlaceOrder]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-info">
                  <strong>{item.food.name}</strong>
                  <span className="food-price">
                    ${item.food.price ? item.food.price.toFixed(2) : ""}
                  </span>
                </div>
                <p className="item-description">{item.food.description}</p>
                <div className="quantity">
                  Quantity: {item.quantity}
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          {showPlaceOrder ? (
            <>
              <PlaceOrder
                cartItems={cartItems}
                totalPrice={totalPrice}
                handleCancelOrder={handleCancelOrder}
              />
              <br />
              <PaymentInfo />
              <Billing />
              <div className="actions">
                <button className="cancel-btn" onClick={handleCancelOrder}>
                  Cancel
                </button>
                <button className="confirm-btn" onClick={handleConfirmOrder}>
                  Confirm Order
                </button>
              </div>
            </>
          ) : (
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          )}
          {orderPlaced && <div className="order-placed">Order Placed!</div>}
        </>
      )}
    </div>
  );
};

export default Cart;
