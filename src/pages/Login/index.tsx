import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Typography, Container } from "@material-ui/core";
import { useFirebase } from "../../services/auth";
import { GoogleButton } from "../../components/GoogleButton";

import { SharedSnackbarContext } from "../../components/SnackBar/SnackContext";

import useStyles from "./styles";

const Login = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();
  const auth = useFirebase();
  const { openSnackbar } = useContext(SharedSnackbarContext);

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const handleLogin = async () => {
    const token = await auth.login();
    if (token) {
      setToken(token);
      openSnackbar("Login bem-sucedido", "success");
      history.push("/home");
    } else {
      openSnackbar("Login não foi realizado com sucesso", "error");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.placeholderLogo}></div>
        <Typography className={styles.text} variant="h1" align="center">
          CineClube
        </Typography>
      </header>

      <Container className={styles.root}>
        <div className={styles.loginWrapper}>
          <Typography
            className={styles.subTitle}
            align="center"
            variant="h5"
            color="textPrimary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <GoogleButton onClick={handleLogin}>
            Continuar com Google
          </GoogleButton>
        </div>
      </Container>
    </div>
  );
};

export default Login;
