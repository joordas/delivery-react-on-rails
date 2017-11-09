import React from "react";
import { render } from "react-dom";

import Homepage from "./components/Homepage";

const homepage = document.getElementById("homepage");

if (homepage) {
  const allRestaurants = JSON.parse(homepage.dataset.restaurants);
  render(<Homepage restaurants={allRestaurants} />, homepage);
}
