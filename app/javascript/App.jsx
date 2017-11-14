import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { render } from "react-dom";
import history from "./history";

import Homepage from "./pages/components/Homepage";
import RestaurantListPage from "./restaurants/components/RestaurantListPage";
import RestaurantPage from "./restaurants/components/RestaurantPage";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/restaurants" component={RestaurantListPage} />
          <Route exact path="/restaurants/:id" component={RestaurantPage} />
        </div>
      </Router>
    );
  }
}

const app = document.getElementById("app");

if (app) {
  render(<App />, app);
}

export default App;
