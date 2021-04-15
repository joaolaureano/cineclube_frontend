import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginTest from "./pages/LoginTest";
import { HomeWrapper } from "./pages/HomeWrapper/HomeWrapper";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeWrapper} />
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/loginTest" exact component={LoginTest} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
