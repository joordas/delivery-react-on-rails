import React from "react";
import { render } from "react-dom";

import HomepageBanner from "./components/HomepageBanner";

const homepageBanner = document.getElementById("homepage-banner");

if (homepageBanner) {
  render(<HomepageBanner />, homepageBanner);
}
