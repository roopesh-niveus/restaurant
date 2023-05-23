import React from "react";
import { Link } from "react-router-dom";

function Restaurant({ handleRestaurantClick, selectedRestaurantId }) {
  const restaurants = [
    { id: 1, name: "Restaurant A" },
    { id: 2, name: "Restaurant B" },
    { id: 3, name: "Restaurant C" },
  ];


  return (
    <div>
      <h2>List of Restaurants</h2>
      <ul style={{ listStyle: "none" }}>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              to={`/foodlist/${restaurant.id}`}
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: restaurant.id === selectedRestaurantId ? "bold" : "normal",
              }}
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurant;
