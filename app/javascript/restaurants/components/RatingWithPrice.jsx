import React, { Component } from "react";
import styled from "styled-components";

import { numberToColorHsl } from "../../helpers/helpers";

import { styles } from "../../style-variables";

const Wrapper = styled.div`
  background-color: ${styles.colors.black};
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100px;
  border-radius: 4px;
  padding: 6px 10px;
  margin: 2px 1px;
`;

const Rating = styled.span`
  font-weight: 700;
  font-family: ${styles.fonts.lato};
  margin-right: 5px;
  letter-spacing: 3px;
`;

const PriceRating = styled.span`
  color: ${styles.colors.white};
  font-family: ${styles.fonts.lato};
  font-style: italic;
  font-size: 0.875rem;
  font-weight: 400;
  margin-left: 5px;
  vertical-align: bottom;
  letter-spacing: 3px;
`;

class RatingWithPrice extends Component {
  render() {
    const rating = Math.floor(
      this.props.positiveReviews / this.props.totalReviews * 100
    );

    return (
      <Wrapper>
        <Rating style={{ color: numberToColorHsl(rating) }}>{rating}%</Rating>
        <span style={{ color: "white" }}>⏺</span>
        <PriceRating>{this.props.priceRating}</PriceRating>
      </Wrapper>
    );
  }
}

export default RatingWithPrice;
