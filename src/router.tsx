import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { HomeWrapper } from "./pages/HomeWrapper/HomeWrapper";
import { MovieLists } from "./pages/MovieLists";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeWrapper} />
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/user/movies" exact component={MovieLists} />
        <ProtectedRoute path="/loginTest" exact component={LoginTest} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
