import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { styles } from "../../style-variables";

const RestaurantGridItem = styled(Link)`background-color: "#4f4f4f";`;

const RestaurantName = styled.span`
  font-family: ${styles.fonts.lato};
  color: ${styles.colors.mainBlue};
`;

class RestaurantListItem extends Component {
  state = {
    id: this.props.restaurant.id
  };
  render() {
    const { name, address, phone_number, id, slug } = this.props.restaurant;
    return (
      <RestaurantGridItem to={`restaurants/${slug}`}>
        <RestaurantName>{name}</RestaurantName>
        <RestaurantName>{address}</RestaurantName>
      </RestaurantGridItem>
    );
  }
}

export default RestaurantListItem;
