import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Example from "./pages/Example";
import LoginTest from "./pages/LoginTest";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Example} />
        <Route path="/home" exact component={Home} />
        <ProtectedRoute path="/loginTest" exact component={LoginTest} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
