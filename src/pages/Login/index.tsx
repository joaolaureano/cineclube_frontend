import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";

import { useFirebase } from "../../services/login";
import useStyles from "./styles";

const Example = (): JSX.Element => {
  const styles = useStyles();
  const { login, logout, authUser } = useFirebase();
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(authUser?.displayName);
    console.log(authUser?.email);
    console.log(authUser?.photoURL);
    authUser?.getIdToken().then((res) => setToken(res));
    console.log(token);
  });
  return (
    <Container>
      <Typography variant="h1">Testing Login</Typography>
      <Button onClick={login} variant="contained" color="primary">
        Login Test
      </Button>
      <Button onClick={logout} variant="contained" color="primary">
        logout Test
      </Button>
    </Container>
  );
};

export default Example;
