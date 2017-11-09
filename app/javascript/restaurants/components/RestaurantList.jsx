import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RestaurantListItem from "./RestaurantListItem";

const RestaurantGrid = styled.div`
  background-color: white;
  color: white;
  // code css grid HERE!
`;

class RestaurantList extends Component {
  state = {
    restaurantList: []
  };

  fetchAllRestaurants = () => {
    fetch("/api/restaurants")
      .then(res => res.json())
      .then(restaurantList => {
        this.setState({ restaurantList });
      });
  };

  componentWillMount() {
    this.fetchAllRestaurants();
  }

  render() {
    return (
      <RestaurantGrid>
        {this.state.restaurantList.map(restaurant => (
          <RestaurantListItem key={restaurant.slug} restaurant={restaurant} />
        ))}
        <Link to="/restaurants"> hey </Link>
      </RestaurantGrid>
    );
  }
}

export default RestaurantList;
