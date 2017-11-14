import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../pages/components/Navbar";
import BackButton from "../../pages/components/BackButton";

class RestaurantPage extends Component {
  state = {
    restaurant: {
      name: "",
      address: "",
      dishes: []
    }
  };

  fetchRestaurant = () => {
    const { id } = this.props.match.params;
    console.log(id);
    fetch(`/api/restaurants/${id}`)
      .then(res => res.json())
      .then(restaurant => {
        this.setState({
          restaurant
        });
      });
  };

  componentDidMount() {
    this.fetchRestaurant();
  }

  render() {
    const { name, address, dishes } = this.state.restaurant;

    return (
      <div>
        <Navbar />
        <BackButton />
      </div>
    );
  }
}
export default RestaurantPage;
