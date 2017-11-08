import React from "react";
import { render } from "react-dom";
import RestaurantList from "./components/restaurant_list";

const restaurantsContainer = document.getElementById("restaurants");

if (restaurantsContainer) {
  const restaurants = JSON.parse(restaurantsContainer.dataset.restaurants);
  render(<RestaurantList restaurants={restaurants} />, restaurantsContainer);
}
