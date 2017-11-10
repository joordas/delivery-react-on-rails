import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <h1>hello from Restaurant Page!!</h1>
        <p>{name}</p>
        <p>{address}</p>
        {dishes.map(dish => (
          <div key={dish.id}>
            <p>{dish.name}</p>
            <p> {dish.price} </p>
            <p />
          </div>
        ))}
      </div>
    );
  }
}
export default RestaurantPage;
