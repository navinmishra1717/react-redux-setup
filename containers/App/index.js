/**
 * App/index.js
 * This is skeleton around the actual pages
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
// import { compose } from "redux";
import RoutesPublic from "../../layouts/public/public";

const App = () => (
  <Switch>
    <Route path="/" component={RoutesPublic} />
  </Switch>
);

export default App;
