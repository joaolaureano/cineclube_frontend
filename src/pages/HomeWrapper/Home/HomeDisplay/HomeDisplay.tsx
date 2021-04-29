import React from "react";
import { AppBar, Divider, Container, IconButton } from "@material-ui/core";

import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import useStyles from "./styles";
import { Movie } from "../../../../types/movie";
import { MovieStateLogic } from "../Home";
import { LikeModal } from "../../../../components/LikeModal";
import { PlatformIcon } from "../../../../components/PlatformIcon";
import TemporaryDrawer from "../../../../components/Menu";
import logoImg from "../../../../assets/images/logos/home-logo.png";
import { CustomIcon } from "../../../../components/CustomIcon";

interface HomeDisplayProps {
  movie: Movie;
  logic: MovieStateLogic;
  modalLiked: boolean;
}

export const HomeDisplay: React.FC<HomeDisplayProps> = (props) => {
  const classes = useStyles();

  const { movie, logic, modalLiked } = props;

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {/* Botão Menu */}
        <div className={classes.topMenu}>
          <img src={logoImg} alt="Cinehal logo" className={classes.logo} />
          <TemporaryDrawer />
        </div>

        {/* Conteudo do Filme */}
        <Container className={classes.content}>
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
            <Typography
              className={classes.originalTitle}
              gutterBottom
              variant="body1"
              component="p"
            >
              {`(${movie.originalTitle})`}
            </Typography>
            <Typography
              className={classes.year}
              gutterBottom
              variant="body1"
              component="p"
            >
              {movie.year}
            </Typography>
            <Typography
              className={classes.duration}
              variant="caption"
              display="block"
              gutterBottom
            >
              {`${movie.duration} MIN`}
            </Typography>
            <Typography
              className={classes.synopsis}
              variant="body1"
              color="textPrimary"
              component="p"
            >
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
                className={classes.cast}
              >
                Direção:&nbsp;
              </Typography>
              <Typography
                className={[classes.cast, classes.castNames].join(" ")}
              >
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
              <Typography
                className={[classes.cast, classes.castNames].join(" ")}
              >
                {movie.actors.join(", ")}
              </Typography>
            </div>

            <div className={classes.tags}>
              {movie.moviesTags.map(({ tag }) => {
                return (
                  <Chip
                    variant="outlined"
                    size="small"
                    label={tag.name}
                    key={tag.name}
                    className={classes.tag}
                    icon={<FiberManualRecordIcon />}
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
              <CustomIcon type="undo" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={logic.functions.handleClickDidntLike}
              aria-label="dislike"
              color="primary"
            >
              <CustomIcon type="dontWantToWatch" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={logic.functions.handleClickWantoWatch}
              aria-label="like"
              color="primary"
            >
              <CustomIcon type="wantToWatch" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={logic.functions.handleClickWatched}
              aria-label="star"
              color="primary"
            >
              <CustomIcon type="watched" />
            </IconButton>
            <LikeModal
              open={modalLiked}
              like={logic.functions.handleClickLikedMovie}
              dislike={logic.functions.handleClickDislikedMovie}
              onClose={logic.functions.handleCloseModal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            />
          </div>
        </AppBar>
      </Container>
    </div>
  );
};
