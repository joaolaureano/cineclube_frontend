import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { HomeWrapper } from "./pages/HomeWrapper/HomeWrapper";
import { MovieLists } from "./pages/MovieLists";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";
import Filter from "./pages/Filter";
import { LoginSignupPreferences } from "./pages/Login/SignupPreferences/SignupPreferences";
import { AchievementList } from "./pages/AchievementList";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeWrapper} />
        <Route path="/" exact component={Login} />
        <Route path="/filter" exact component={Filter} />
        <ProtectedRoute
          path="/user/movies/:list"
          exact
          component={MovieLists}
        />
        <ProtectedRoute path="/loginTest" exact component={LoginTest} />
        <ProtectedRoute
          path="/signupPreferences"
          exact
          component={LoginSignupPreferences}
        />
        <ProtectedRoute
          path="/user/achievements"
          exact
          component={AchievementList}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
