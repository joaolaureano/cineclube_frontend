import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { Theme } from "@material-ui/core/styles";
import { useFirebase } from "../../services/login";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import useStyles from "./styles";
const Example = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [isSuccessfull, setIsSuccessfull] = React.useState(false);
  const history = useHistory();
  const { login, logout, getToken, authUser } = useFirebase();
  const styles = useStyles();
  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const handleLogin = async () => {
    const token = await login();
    if (token) {
      setToken(token);
      setIsSuccessfull(true);
      setOpen(true);
    } else {
      setIsSuccessfull(false);
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
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
      <Snackbar
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
      >
        {isSuccessfull ? (
          <SnackbarContent
            className={styles.snackSuccess}
            message={<span id="client-snackbar">Login feito com sucesso!</span>}
          />
        ) : (
          <SnackbarContent
            className={styles.snackFailure}
            message={
              <span id="client-snackbar">Login não foi bem-sucedido.</span>
            }
          />
        )}
      </Snackbar>
    </Container>
  );
};

export default Example;
