import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Restaurant from "./Components/Restaurant";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";
import FoodList from "./Components/FoodList";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [selectedRestaurantId, setSelectedRestaurantId] = React.useState(null);
  const [orders, setOrders] = React.useState([]);

  const handleRestaurantClick = (restaurantId) => {
    if (restaurantId !== selectedRestaurantId) {
      setSelectedRestaurantId(restaurantId);
      setCartItems([]);
    }
  };

  const handleAddToCart = (foodItem) => {
    const existingItem = cartItems.find((item) => item.food.name === foodItem.name);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.food.name === foodItem.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { food: foodItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((cartItem) => {
        if (cartItem.food.name === item.food.name) {
          if (cartItem.quantity > 1) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          } else {
            return null;
          }
        }
        return cartItem;
      });

      return updatedCart.filter(Boolean);
    });
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Restaurant
                handleRestaurantClick={handleRestaurantClick}
                selectedRestaurantId={selectedRestaurantId}
              />
            }
          />
          <Route path="/myorders" element={<Orders orders={orders} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                orders={orders}
                setOrders={setOrders}
              />
            }
          />
          <Route
            path="/foodlist/:restaurantId"
            element={<FoodList handleAddToCart={handleAddToCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
