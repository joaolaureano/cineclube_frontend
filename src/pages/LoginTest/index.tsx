import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";

import { useFirebase } from "../../services/login";

const Example = (): JSX.Element => {
  const history = useHistory();
  const { login, logout, getToken } = useFirebase();

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
      <Typography variant="h3">Login Test Page</Typography>
      <br />
      <br />
      <Button onClick={handleLogin} variant="contained" color="primary">
        Login
      </Button>
      <br />
      <br />
      <Button onClick={handleLogout} variant="contained" color="primary">
        Logout
      </Button>
      <br />
      <br />
      <Button
        onClick={handleTokenGeneration}
        variant="contained"
        color="primary"
      >
        Get token
      </Button>
    </Container>
  );
};

export default Example;
