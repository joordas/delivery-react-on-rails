import React, { Component } from "react";
import styled from "styled-components";
import { styles } from "../../style-variables";

const Wrapper = styled.div`
  padding-top: 50px;
  overflow-x: hidden;
  background-image: url("https://images.unsplash.com/photo-1498837167922-ddd27525d352?dpr=1&auto=format&fit=crop&w=1950&h=&q=60&cs=tinysrgb&crop=");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  min-height: calc(90vh);
  z-index: -6;
  opacity: 0.99;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  &::after {
    overflow-x: hidden;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -1250px;
    background: linear-gradient(90deg, #2bc0e4 50%, #eaecc6aa);
    width: 2500px;
    height: 2500px;
    transform: rotate(45deg);
    z-index: -3;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -2000px;
    background: linear-gradient(135deg, #ff8008ee 5%, #ffc837);
    width: 2500px;
    height: 2500px;
    transform: rotate(45deg);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    z-index: -2;
`;

const Header = styled.h1`
  font-family: ${styles.fonts.raleway};
  font-weight: 900;
  color: white;
  font-size: 6rem;
  max-width: 30vw;
  line-height: 1.5;
  letter-spacing: 4px;
  margin-bottom: 0;
`;

const Subheader = styled.h3`
  font-weight: 300;
  font-size: 3em;
  margin-top: 30px;
  color: ${styles.colors.brightGreen};
  font-family: "Open Sans Condensed";
  letter-spacing: 18px;
  margin-bottom: 8rem;
`;

const SearchBarWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 1200px;
  max-width: 1200px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  padding: 5px;
  transition-duration: 0.2s;
  &.focus {
    background-color: rgba(43, 192, 228, 0.8);
    box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.16);
  }
`;

const SearchBar = styled.input`
  font-family: ${styles.fonts.montserrat};
  color: ${styles.colors.grey};
  text-align: center;
  max-width: 1100px;
  flex: 1;
  border: none;
  font-size: 2.125rem;
  border-radius: 5px 0 0 5px;
  padding: 5px;
  // text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${styles.colors.lightGrey};
    letter-spacing: 3px;
  }
`;

const SearchButton = styled.div`
  background-color: ${styles.colors.mainBlue};
  color: white;
  // flex: 1;
  padding: 0 25px;
  height: 100%;
  font-family: ${styles.fonts.lato};
  text-align: center;
  font-size: 2.125rem;
  vertical-align: bottom;
  height: calc(2.125rem + 15px);
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: #2bc0e4;
  }
  p {
    margin: 0;
    vertical-align: bottom;
    margin-top: 3px;
  }
`;

class HomepageBanner extends Component {
  state = {
    searchBarFocus: false
  };

  handleSearchbarFocus() {
    this.setState({ searchBarFocus: true });
  }

  handleSearchbarBlur() {
    this.setState({ searchBarFocus: false });
  }

  render() {
    const searchBarFocus = this.state.searchBarFocus ? "focus" : "";
    return (
      <Wrapper>
        <ContentWrapper>
          <Header>YOUR FAVORITE RESTAURANTS</Header>
          <Subheader>NOW WITH DELIVERY.</Subheader>
          <SearchBarWrapper className={searchBarFocus}>
            <SearchBar
              placeholder="🔍  Start by typing your street name or P.O. Box"
              onFocus={this.handleSearchbarFocus.bind(this)}
              onBlur={this.handleSearchbarBlur.bind(this)}
            />
            <SearchButton>
              <p>Go</p>
            </SearchButton>
          </SearchBarWrapper>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default HomepageBanner;
