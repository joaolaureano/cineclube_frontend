import React, { useState } from "react";
import { useHistory } from "react-router";
import { Container, IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { AchievementCard } from "./AchievementCard";
import { AchievementDetails } from "./AchievementDetails";
import { Achievement } from "../../types/achievement";

import useStyles from "./styles";

export const AchievementList = () => {
  const [isAchievementOpen, setIsAchievementOpen] = useState(false);
  const [selectedAchievement, setselectedAchievement] = useState<
    Achievement | undefined
  >();
  const history = useHistory();
  const styles = useStyles();

  const handleClickBack = () => {
    history.goBack();
  };

  const handleCloseAchievementDetails = () => {
    setselectedAchievement(undefined);
    setIsAchievementOpen(false);
  };

  const handleClickAchievement = (achievement: Achievement) => {
    setselectedAchievement(achievement);
    setIsAchievementOpen(true);
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
      return (
        <AchievementCard
          onClick={handleClickAchievement}
          achievement={achievementData}
        />
      );
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
      <AchievementDetails
        visible={isAchievementOpen}
        achievement={selectedAchievement}
        onClose={handleCloseAchievementDetails}
      />
    </div>
  );
};
