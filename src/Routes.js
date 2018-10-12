import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound"

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={PageNotFound} />
  </Switch>;