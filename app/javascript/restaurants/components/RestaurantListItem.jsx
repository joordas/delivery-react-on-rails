import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { styles } from "../../style-variables";
import { numberToColorHsl } from "../../helpers/helpers";

const RestaurantGridItem = styled.div`
  background-color: #fefefe;
  box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  &:hover {
    opacity: 0.95;
  }
`;

const Name = styled(Link)`
  font-family: ${styles.fonts.lato};
  color: ${styles.colors.grey};
  font-size: 1.275rem;
`;
const CardInfo = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
`;

const Address = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  font-style: italic;
  font-family: ${styles.fonts.lato};
  color: ${styles.colors.lightGrey};
`;

const BackgroundImage = styled.a`
  background-position: center;
  background-size: cover;
  border-radius: 3px 3px 0 0;
  height: 300px;
  max-height: 300px;
`;

const Ratings = styled.span`
  color: green;
  font-weight: 700;
  font-family: ${styles.fonts.lato};
`;

class RestaurantListItem extends Component {
  render() {
    const {
      name,
      address,
      phone_number,
      id,
      slug,
      total_reviews,
      positive_reviews
    } = this.props.restaurant;
    const rating = Math.floor(positive_reviews / total_reviews * 100);
    return (
      <RestaurantGridItem to={`restaurants/${slug}`}>
        <BackgroundImage
          style={{ backgroundImage: `url(${this.props.restaurantPictureUrl})` }}
          href={`/restaurants/${slug}`}
        />
        <CardInfo>
          <Name to={`restaurants/${slug}`}>{name}</Name>
          <Address>{address}</Address>
          <Ratings style={{ color: numberToColorHsl(rating) }}>
            {rating}%
          </Ratings>
        </CardInfo>
      </RestaurantGridItem>
    );
  }
}

RestaurantListItem.defaultProps = {
  restaurantPictureUrl: "https://picsum.photos/500/300"
};

export default RestaurantListItem;
