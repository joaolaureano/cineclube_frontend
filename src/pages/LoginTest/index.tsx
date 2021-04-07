import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";

import { useFirebase } from "../../services/auth";
import useStyles from "./styles";

const Example = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [isSuccessfull, setIsSuccessfull] = React.useState(false);

  const history = useHistory();
  const styles = useStyles();

  const { login, logout, getToken } = useFirebase();

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
