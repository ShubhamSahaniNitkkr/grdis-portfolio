import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/layouts/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Route exact path="/" component={Home} />
        </Fragment>
      </Switch>
    </Router>
  );
};

export default App;
