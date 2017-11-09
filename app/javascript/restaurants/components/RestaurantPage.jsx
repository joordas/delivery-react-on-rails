import React, { Component } from "react";

class RestaurantPage extends Component {
  state = {
    restaurant: {}
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

  componentWillMount() {
    this.fetchRestaurant();
  }

  render() {
    const { name, address } = this.state.restaurant;
    const dishes = this.state.restaurant.dishes;

    return (
      <div>
        <h1>hello from Restaurant Page!!</h1>
        <p>{name}</p>
        <p>{address}</p>
        {console.log(dishes)}
        {dishes.map(dish => <p>dish.name</p>)}
      </div>
    );
  }
}
export default RestaurantPage;
