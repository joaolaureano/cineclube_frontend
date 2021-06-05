import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import { Achievement } from "../../../types/achievement";

import useStyles from "./styles";

interface AchievementCardProps {
  achievement: Achievement;
}
export const AchievementCard = (props: AchievementCardProps): JSX.Element => {
  const styles = useStyles();

  return (
    <Card className={styles.card} variant="outlined">
      <CardContent className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={props.achievement.pathImage}
            alt={props.achievement.description}
          />
        </div>
        <div className={styles.cardText}>
          <Typography className={styles.cardTitle} variant="h5" component="h2">
            {props.achievement.title}
          </Typography>
          <Typography
            className={styles.cardDescription}
            variant="body2"
            component="p"
          >
            {props.achievement.description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
