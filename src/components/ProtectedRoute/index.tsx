import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const token = localStorage.getItem("token");
  if (!token) return <Redirect to="/" exact />;
  return <Route {...props} />;
};

export default ProtectedRoute;
