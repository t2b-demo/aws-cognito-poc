import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound"
import Login from "./components/Login"
import Signup from "./components/Signup"
import AppliedRoute from "./routes/AppliedRoute"

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    
    { /* Finally, catch all unmatched routes */ }
    <Route component={PageNotFound} />
  </Switch>;