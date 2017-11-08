import React, { Component } from "react";

import RestaurantListItem from "./restaurant_list_item";

class RestaurantList extends Component {
  render() {
    return (
      <div className="restaurant-grid">
        {this.props.restaurants.map(restaurant => (
          <RestaurantListItem restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    );
  }
}

export default RestaurantList;
