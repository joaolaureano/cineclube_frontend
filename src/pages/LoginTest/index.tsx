import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";

import { useFirebase } from "../../services/login";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const Example = (): JSX.Element => {
  //const styles = useStyles();
  const history = useHistory();

  const { login, logout, getToken, authUser } = useFirebase();

  const [open, setOpen] = React.useState(false);

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const handleLogin = async () => {
    const token = await login();
    if (token) {
      setToken(token);
      setOpen(true);
    }
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

  const styles = {
    snackbarStyleViaContentProps: {
      backgroundColor: "orange",
    },
    snackbarStyleViaNestedContent: {
      backgroundColor: "lightgreen",
      color: "black",
    },
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
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={true}
        message={
          <span id="message-id">
            <div>Hi there! Some message.</div>
          </span>
        }
      />
      {/* <Snackbar 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        bodyStyle={{ backgroundColor: 'teal', color: 'coral' }} 
      >
      </Snackbar>  */}
    </Container>
  );
};

export default Example;
