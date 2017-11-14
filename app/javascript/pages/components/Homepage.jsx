import React, { Component } from "react";
import HomepageBanner from "./HomepageBanner";
import styled from "styled-components";

import Navbar from "./Navbar";
import RestaurantList from "../../restaurants/components/RestaurantList";

const RoundedPanel = styled.div`
  width: calc(97.2vw - 40px);
  margin: -10px auto 0;
  height: 800px; // remove;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 20px;
  position: static;
  z-index: 10;
  opacity: 0.9999;
  background-color: white;
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.06);
`;

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar whitelogo="true" />
        <HomepageBanner />
        <RoundedPanel>
          <RestaurantList restaurants={this.props.restaurants} />
        </RoundedPanel>
      </div>
    );
  }
}

export default Homepage;
