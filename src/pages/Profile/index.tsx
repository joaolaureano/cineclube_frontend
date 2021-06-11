import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { useFirebase } from "../../services/auth";
import { Container, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useState } from "react";
import { Divider } from "@material-ui/core";

const Profile = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();
  const auth = useFirebase();

  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const backToMenu = () => {
    history.push("/home");
  };
  useEffect(() => {
    const user = auth.authUser;
    if (user) {
      if (user.photoURL) setPhotoUrl(user.photoURL);
      if (user.displayName) setUserName(user.displayName);
      if (user.email) setUserEmail(user.email);
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
        <Typography
          className={styles.profileInfo}
          variant="body1"
          color="textPrimary"
          component="p"
        >
          {userName}
        </Typography>
        <Divider variant="middle" className={styles.divider} />
        <Typography
          className={styles.profileInfo}
          variant="body1"
          color="textPrimary"
          component="p"
        >
          {userEmail}
        </Typography>
      </Container>
    </div>
  );
};

export default Profile;
