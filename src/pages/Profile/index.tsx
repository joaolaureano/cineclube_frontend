import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { useFirebase } from "../../services/auth";
import { Container, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useState } from "react";

const Profile = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();
  const auth = useFirebase();

  const [photoUrl, setPhotoUrl] = useState<string>("");

  const backToMenu = () => {
    history.push("/home");
  };
  useEffect(() => {
    // console.log("loading...");
    const user = auth.authUser;
    if (user) {
      if (user.photoURL) {
        setPhotoUrl(user.photoURL);
        console.log(user.photoURL);
      }
    }
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
      <Container className={styles.photoWrapper}>
        <img src={photoUrl} />
      </Container>
      <Container className={styles.contentWrapper}>
        <p>seila</p>
      </Container>
    </div>
  );
};

export default Profile;
