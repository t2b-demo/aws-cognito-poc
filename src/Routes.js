import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound"
import Login from "./components/Login"
import Signup from "./components/Signup"
import AuthPage from "./components/AuthPage"
import AppliedRoute from "./routes/AppliedRoute"
import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./routes/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute  path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute  path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute  path="/authPage" exact component={AuthPage} props={childProps} />
    
    { /* Finally, catch all unmatched routes */ }
    <Route component={PageNotFound} />
  </Switch>;