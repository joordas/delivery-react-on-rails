import React, { Component } from "react";
import styled from "styled-components";

import { styles } from "../../style-variables";
import { numberToColorHsl } from "../../helpers/helpers";

import RatingWithPrice from "./RatingWithPrice";

const Wrapper = styled.div`
  // padding: 30px 100px;
  margin: 0 30px;
`;

const RestaurantBanner = styled.div`
  width: 100%;
  background-position: center;
  background-size: cover;
  height: 260px;
  border-radius: 2px;
`;

const Grid = styled.div`
  background-color: #fefefe;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 8px;
  border-radius: 2px;
  margin-top: 10px;
`;

const RestaurantInfo = styled.div`
  background-color: #eee;
  padding: 0.1rem 1.25rem;
  border-radius: 2px;
  h1 {
    color: ${styles.colors.mainBlue};
    font-family: ${styles.fonts.lato};
    font-weight: 300;
    font-size: 2.25rem;
  }
  h2 {
    font-family: ${styles.fonts.lato};
    color: ${styles.colors.lightGrey};
    font-size: 1rem;
    font-style: italic;
    font-weight: 300;
  }
`;

const Menu = styled.div``;

class RestaurantMenu extends Component {
  render() {
    const {
      name,
      address,
      dishes,
      total_reviews,
      positive_reviews
    } = this.props.restaurant;
    const rating = Math.floor(positive_reviews / total_reviews * 100);
    const priceRating = "££"; //should come from API call (props)
    return (
      <Wrapper>
        <RestaurantBanner
          style={{ backgroundImage: `url(${this.props.imageUrl})` }}
        />
        <Grid>
          <RestaurantInfo>
            <h1>{name}</h1>
            <RatingWithPrice
              totalReviews={total_reviews}
              positiveReviews={positive_reviews}
              priceRating={priceRating}
            />
            <h2>{address}</h2>
          </RestaurantInfo>
          <div style={{ backgroundColor: "#ccc" }} />
        </Grid>
      </Wrapper>
    );
  }
}
export default RestaurantMenu;
