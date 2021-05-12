import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { HomeWrapper } from "./pages/HomeWrapper/HomeWrapper";
import { MovieLists } from "./pages/MovieLists";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";
import Filter from "./pages/Filter";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeWrapper} />
        <Route path="/" exact component={Filter} />
        <Route path="/filter" exact component={Filter} />
        <ProtectedRoute
          path="/user/movies/:list"
          exact
          component={MovieLists}
        />
        <ProtectedRoute path="/loginTest" exact component={LoginTest} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
