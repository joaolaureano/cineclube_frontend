import React from "react";
import { useHistory } from "react-router";
import { Container, IconButton, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { ArrowBack } from "@material-ui/icons";
import { AchievementCard } from "./AchievementCard";

export const AchievementList = () => {
  const history = useHistory();
  const styles = useStyles();

  const handleClickBack = () => {
    history.goBack();
  };

  const renderAchievements = () => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const achievementData = {
      tagName: "Horror",
      targetScore: 3,
      pathImage:
        "https://lh3.googleusercontent.com/u/0/d/1rOIf8eTXBys63J9iGkSBLjDsOG-aLtML=w1858-h994-iv1",
      title: "Não tenha medo!",
      description:
        "O filme já acabou e acho que nada daquilo é real. Enfim, parabéns pela conquista de 3 filmes de terror assistidos.",
    };

    return arr.map((achievement) => {
      return <AchievementCard achievement={achievementData} />;
    });
  };

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <IconButton className={styles.backIcon} onClick={handleClickBack}>
            <ArrowBack fontSize="large" />
          </IconButton>
          <Typography className={styles.pageTitle} variant="h5">
            Conquistas
          </Typography>
        </header>
        <div className={styles.achievementList}>{renderAchievements()}</div>
      </Container>
    </div>
  );
};
