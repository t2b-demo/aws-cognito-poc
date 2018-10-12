import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound"
import Login from "./components/Login"

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={PageNotFound} />
  </Switch>;