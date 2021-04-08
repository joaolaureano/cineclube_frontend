import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Example from "./pages/Example";
import LoginTest from "./pages/LoginTest";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Example} />
        <Route path="/logintest" exact component={LoginTest} />
        <Route path="/home" exact component={Home} />
        <ProtectedRoute path="/example" exact component={Example} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
