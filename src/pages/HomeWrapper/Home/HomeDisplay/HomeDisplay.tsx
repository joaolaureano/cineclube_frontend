import React from "react";
import {
  AppBar,
  Divider,
  Box,
  // Toolbar,
  Container,
  IconButton,
  // Grid,
  // ButtonGroup,
} from "@material-ui/core";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import ReplayIcon from "@material-ui/icons/Replay";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import StarIcon from "@material-ui/icons/Star";
import MenuIcon from "@material-ui/icons/Menu";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import useStyles from "./styles";
import { Movie } from "../../../../types/movie";
import { MovieStateLogic } from "../Home";
import { PlatformIcon } from "../../../../components/PlatformIcon";
import { join } from "node:path";

interface HomeDisplayProps {
  movie: Movie;
  logic: MovieStateLogic;
}

export const HomeDisplay: React.FC<HomeDisplayProps> = (props) => {
  const classes = useStyles();

  const { movie, logic } = props;

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {/* Botão Hamburger */}
        <div className={classes.topMenu}>
          <IconButton color="primary" onClick={() => alert("menu")}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>

        {/* Conteudo do Filme */}
        <Container>
          <img
            src={movie.pathBanner}
            alt="movie cover"
            className={classes.cover}
          />
          <div className={classes.movieInfo}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.movieTitle}
            >
              {movie.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {`(${movie.originalTitle})`} <br />
              {movie.year}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {movie.duration}min
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              {movie.synopsis}
            </Typography>

            <AvatarGroup className={classes.platforms}>
              {movie.platforms.map(({ name }) => {
                return (
                  <PlatformIcon
                    className={classes.platform}
                    variant="rounded"
                    platform={name}
                  />
                );
              })}
            </AvatarGroup>

            <div>
              <Typography
                variant="body1"
                color="textPrimary"
                className={classes.director}
              >
                Direção:&nbsp;
              </Typography>
            </div>
            <div>
              <Typography className={classes.director}>
                {movie.director}
              </Typography>
            </div>

            <div>
              <Typography
                variant="body1"
                color="textPrimary"
                className={classes.cast}
              >
                Elenco principal:&nbsp;
              </Typography>
            </div>
            <div>
              {movie.cast && (
                <Typography className={classes.cast}>
                  {movie.cast.join(", ")}
                </Typography>
              )}
            </div>

            <div className={classes.tags}>
              {movie.moviesTags.map(({ tag }) => {
                return (
                  <Chip
                    variant="outlined"
                    size="small"
                    label={tag.name}
                    color="primary"
                    key={tag.name}
                    className={classes.tag}
                  />
                );
              })}
            </div>
          </div>
        </Container>

        {/* Botoes do Tinder */}
        <AppBar position="fixed" color="transparent" className={classes.appBar}>
          <div className={classes.bottomMenu}>
            <IconButton
              onClick={logic.functions.handleClickUndoLastAction}
              aria-label="undo"
              color="primary"
            >
              <ReplayIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={logic.functions.handleClickDidntLike}
              aria-label="dislike"
              color="primary"
            >
              <ClearIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={logic.functions.handleClickWatchedAndLiked}
              aria-label="like"
              color="primary"
            >
              <CheckIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={logic.functions.handleClickWantoWatch}
              aria-label="star"
              color="primary"
            >
              <StarIcon fontSize="large" />
            </IconButton>
          </div>
        </AppBar>
      </Container>
    </div>
  );
};
