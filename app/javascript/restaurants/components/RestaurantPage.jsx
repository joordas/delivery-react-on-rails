import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../../pages/components/Navbar";
import RestaurantMenu from "./RestaurantMenu";

const Wrapper = styled.div`padding: 50px 100px;`;

class RestaurantPage extends Component {
  state = {
    restaurant: {
      name: "",
      address: "",
      dishes: []
    },
    imageUrl: "https://picsum.photos/1440/300"
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
        <RestaurantMenu
          imageUrl={this.state.imageUrl}
          restaurant={this.state.restaurant}
        />
        {/* the imageUrl props should come from the restaurant API call */}
      </div>
    );
  }
}
export default RestaurantPage;
