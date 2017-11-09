import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";

import Homepage from "./pages/components/Homepage";
import RestaurantListPage from "./restaurants/components/RestaurantListPage";
import RestaurantPage from "./restaurants/components/RestaurantPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/restaurants" component={RestaurantListPage} />
          <Route exact path="/restaurants/:id" component={RestaurantPage} />
        </div>
      </BrowserRouter>
    );
  }
}

const app = document.getElementById("app");

if (app) {
  render(<App />, app);
}

export default App;
