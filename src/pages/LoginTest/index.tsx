import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";

import { AuthContext } from "../../contexts/AuthContext";

import useStyles from "./styles";

const Example = (): JSX.Element => {
  const history = useHistory();

  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    const loggedOut = await logout();
    if (loggedOut) {
      localStorage.removeItem("token");
    }

    history.push("/");
  };

  return (
    <Container>
      <Typography variant="h3">Login Test Page</Typography>
      <Button onClick={handleLogout} variant="contained" color="primary">
        Logout
      </Button>
    </Container>
  );
};

export default Example;
