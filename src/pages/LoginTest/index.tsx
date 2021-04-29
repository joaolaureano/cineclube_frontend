import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";

import { useFirebase } from "../../services/auth";
import useStyles from "./styles";

const Example = (): JSX.Element => {
  const history = useHistory();

  const { logout } = useFirebase();

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
