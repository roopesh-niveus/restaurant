import React from "react";
import "./Order.css";

const Orders = ({ orders }) => {
  return (
    <div className="orders">
      <h2>Orders</h2>
      {orders && orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Order Date/Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  {order.cartItems.map((item) => (
                    <div key={item.food.id}>{item.food.name}</div>
                  ))}
                </td>
                <td>
                  {order.cartItems.map((item) => (
                    <div key={item.food.id}>{item.quantity}</div>
                  ))}
                </td>
                <td>
                  {order.cartItems.reduce(
                    (total, item) =>
                      total + (item.food.price || 0) * item.quantity,
                    0
                  )}
                </td>
                <td>{order.orderDateTime}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders yet</p>
      )}
    </div>
  );
};

export default Orders;
