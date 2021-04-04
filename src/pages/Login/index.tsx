import React from "react";

import { Typography, Container } from "@material-ui/core";
import { logIn } from "../../services/login";
import { GoogleButton } from "../../components/GoogleButton";

import useStyles from "./styles";

const Login = (): JSX.Element => {
  const styles = useStyles();

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
          <GoogleButton onClick={logIn}>Continuar com Google</GoogleButton>
        </div>
      </Container>
    </div>
  );
};

export default Login;
