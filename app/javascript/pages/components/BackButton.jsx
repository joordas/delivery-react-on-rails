import React, { Component } from "react";
import styled from "styled-components";
import history from "../../history";

const Wrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

class BackButton extends Component {
  goBack = () => {
    history.goBack();
  };

  render() {
    return (
      <Wrapper onClick={this.goBack}>
        <p>back</p>
      </Wrapper>
    );
  }
}

export default BackButton;
