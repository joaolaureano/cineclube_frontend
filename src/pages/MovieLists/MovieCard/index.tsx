import React from "react";

import { Card, CardMedia, IconButton, Typography } from "@material-ui/core";

import {
  ThumbUp,
  ThumbUpOutlined,
  ThumbDown,
  ThumbDownOutlined,
  Check,
  Close,
} from "@material-ui/icons";

import useStyles from "./styles";
import { PlatformIcon } from "../../../components/PlatformIcon";

interface MovieDetails {
  id: number;
  title: string;
  pathBanner: string;
  platforms: string[];
}

interface MovieCardProps {
  movie: MovieDetails;
  liked?: boolean;
  type: "watched" | "wantsToWatch";
  onDelete: (id: number) => void;
  onLike?: (id: number) => void;
  onDislike?: (id: number) => void;
  onWatch?: (id: number) => void;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const styles = useStyles();

  const handleLike = () => {
    if (props.onLike) {
      props.onLike(props.movie.id);
    }
  };

  const handleDislike = () => {
    if (props.onDislike) {
      props.onDislike(props.movie.id);
    }
  };

  const handleDelete = () => {
    props.onDelete(props.movie.id);
  };

  const handleWatch = () => {
    if (props.onWatch) {
      props.onWatch(props.movie.id);
    }
  };

  const parsePlatforms = (platforms: string[]) => {
    return platforms.map((platform) => {
      return (
        <PlatformIcon
          key={platform}
          className={styles.platformIcon}
          platform={platform}
        />
      );
    });
  };

  const getBottomIcons = () => {
    return props.type === "watched" ? (
      <>
        <IconButton
          onClick={handleLike}
          color="primary"
          className={styles.icon}
        >
          {props.liked ? (
            <ThumbUp fontSize="large" />
          ) : (
            <ThumbUpOutlined fontSize="large" />
          )}
        </IconButton>
        <IconButton
          onClick={handleDislike}
          color="primary"
          className={styles.icon}
        >
          {props.liked ? (
            <ThumbDownOutlined fontSize="large" />
          ) : (
            <ThumbDown fontSize="large" />
          )}
        </IconButton>
      </>
    ) : (
      <>
        <IconButton
          onClick={handleWatch}
          color="primary"
          className={styles.icon}
        >
          <Check fontSize="large" />
        </IconButton>
      </>
    );
  };

  return (
    <Card className={styles.movieItem}>
      <CardMedia
        className={styles.movieCover}
        image={props.movie.pathBanner}
        title="movie cover"
        component="img"
      />

      <div className={styles.content}>
        <div className={styles.topContent}>
          <Typography component="h6" variant="h6">
            {props.movie.title}
          </Typography>
          <IconButton
            onClick={handleDelete}
            color="primary"
            className={styles.closeIcon}
          >
            <Close fontSize="large" />
          </IconButton>
        </div>

        <div className={styles.bottomContent}>
          <span className={styles.platforms}>
            <Typography variant="body2">Disponível em:</Typography>
            <span className={styles.platformIcons}>
              {parsePlatforms(props.movie.platforms)}
            </span>
          </span>

          <span className={styles.bottomIcons}>{getBottomIcons()}</span>
        </div>
      </div>
    </Card>
  );
};
