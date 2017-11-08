import React, { Component } from "react";
import styled from "styled-components";
import { styles } from "../../style-variables";

const Wrapper = styled.div`
  overflow-x: hidden;
  background-image: url("https://images.unsplash.com/photo-1498837167922-ddd27525d352?dpr=1&auto=format&fit=crop&w=1950&h=&q=60&cs=tinysrgb&crop=");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  z-index: 10;
  min-height: calc(100vh - var(--navbar-height) - 10vh);
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
    z-index: 3;
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
    z-index: -9;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    z-index: 5;
`;

const HomepageBanner = () => <Wrapper />;

export default HomepageBanner;
