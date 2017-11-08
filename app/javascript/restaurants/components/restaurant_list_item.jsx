import React, { Component } from "react";
import styled from "styled-components";

import { styles } from "../../style-variables";

const RestaurantName = styled.span`
  font-family: ${styles.fonts.lato};
  color: ${styles.colors.mainBlue};
`;

class RestaurantListItem extends Component {
  render() {
    return (
      <div className="restaurant">
        <RestaurantName>{this.props.restaurant.name}</RestaurantName>
      </div>
    );
  }
}

export default RestaurantListItem;
