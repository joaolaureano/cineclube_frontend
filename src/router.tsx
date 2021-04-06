import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Example from "./pages/Example";
import LoginTest from "./pages/LoginTest";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Example} />
        <Route path="/logintest" exact component={LoginTest} />
        <ProtectedRoute path="/example" exact component={Example} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
