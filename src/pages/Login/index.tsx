import React from "react";

import { Button, Typography } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";
import { logIn } from "../../services/login";
import { GoogleButton } from "../../components/GoogleButton";

import useStyles from "./styles";

const Login = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography
          className={styles.text}
          variant="h1"
          color="textPrimary"
          align="center"
        >
          CineClube
        </Typography>
      </div>

      <div className={styles.root}>
        <GoogleButton onClick={logIn}>Continuar com Google</GoogleButton>
      </div>
    </div>
  );
};

export default Login;
