import React from "react";
import { useParams } from "react-router-dom";

const FoodList = ({ handleAddToCart }) => {
  const restaurants = [
    {
      id: 1,
      name: "Restaurant1",
      title: "Indian Cuisine",
      foods: [
        { name: "Aloo Paratha", description: "Delicious potato-stuffed flatbread", price: 5.99 },
        { name: "Chole Bhature", description: "Spicy chickpea curry with fried bread", price: 7.99 },
      ],
    },
    {
      id: 2,
      name: "Restaurant 2",
      title: "Arabic Cuisine",
      foods: [
        { name: "Chicken Mandi", description: "Traditional Arabic spiced rice with chicken", price: 12.99 },
        { name: "Hummus", description: "Creamy chickpea dip with olive oil and spices", price: 4.99 },
      ],
    },
    {
      id: 3,
      name: "Restaurant 3",
      title: "Mixed Cuisine",
      foods: [
        { name: "Aloo Paratha", description: "Delicious potato-stuffed flatbread", price: 5.99 },
        { name: "Chicken Mandi", description: "Traditional Arabic spiced rice with chicken", price: 12.99 },
      ],
    },
  ];

  const { restaurantId } = useParams();
  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(restaurantId)
  );

  if (!selectedRestaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h2>Menu</h2>
      <h3>{selectedRestaurant.name}</h3>
      <ul>
        {selectedRestaurant.foods.map((food, index) => (
          <li key={index}>
            <div>
              <strong>{food.name}</strong>
              <span className="food-price">${food.price.toFixed(2)}</span>
            </div>
            <p>{food.description}</p>
            <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
