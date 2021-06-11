import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { SharedSnackbarContext } from "../../components/SnackBar/SnackContext";

const Profile = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();

  const backToMenu = () => {
    history.push("/home");
  };
  useEffect(() => {
    console.log("loading...");
  }, []);

  return (
    <div className={styles.root}>
      <Container className={styles.header}>
        <div className={styles.backIconContainer} onClick={backToMenu}>
          <ArrowBack fontSize="large" />
        </div>
        <div className={styles.textContainer}>
          <Typography variant="h5" component="h1" className={styles.title}>
            Perfil
          </Typography>
        </div>
      </Container>
      <Container className={styles.contentWrapper}></Container>
      <Container className={styles.contentWrapper}></Container>
    </div>
  );
};

export default Profile;
