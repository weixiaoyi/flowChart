import React, { Component, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import SvgChart from "../SvgChart";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={(props) => <SvgChart {...props} {...this.props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
