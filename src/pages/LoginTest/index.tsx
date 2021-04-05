import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";

import { useFirebase } from "../../services/login";
import useStyles from "./styles";

const Example = (): JSX.Element => {
  const styles = useStyles();
  const history = useHistory();
  const { login, logout, getToken, authUser } = useFirebase();

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const handleLogin = async () => {
    const token = await login();
    if (token) setToken(token);
  };

  const handleLogout = async () => {
    const loggedOut = await logout();
    if (loggedOut) {
      localStorage.removeItem("token");
    }

    history.push("/");
  };

  const handleTokenGeneration = async () => {
    const token = await getToken();
    if (token) setToken(token);
  };

  return (
    <Container>
      <Typography variant="h1">Testing Login</Typography>
      <Button onClick={handleLogin} variant="contained" color="primary">
        Login Test
      </Button>
      <Button onClick={handleLogout} variant="contained" color="primary">
        logout Test
      </Button>
      <Button
        onClick={handleTokenGeneration}
        variant="contained"
        color="primary"
      >
        Generate new token
      </Button>
    </Container>
  );
};

export default Example;
