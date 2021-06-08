import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Container, IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { AchievementCard } from "./AchievementCard";
import AchievementService from "../../services/achievement";
import { Achievement } from "../../types/achievement";

import useStyles from "./styles";

export const AchievementList = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const history = useHistory();
  const styles = useStyles();

  useEffect(() => {
    const fetchUserAchievements = async () => {
      const response = await AchievementService.getUserAchievements();

      const achievements: Achievement[] = response.data;
      setAchievements(achievements);
    };

    fetchUserAchievements();
  }, []);

  const handleClickBack = () => {
    history.goBack();
  };

  const renderAchievements = () => {
    return achievements.map((achievement) => {
      return <AchievementCard achievement={achievement} />;
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
