import React from "react";
import {
  AppBar,
  Divider,
  Toolbar,
  Container,
  IconButton,
  Grid,
  ButtonGroup,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReplayIcon from "@material-ui/icons/Replay";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import StarIcon from "@material-ui/icons/Star";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";

const movieCover = {
  url:
    "data:image/jpeg;base64,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",
};

const movieData = {
  title: "Inferno na Ilha",
  originalTitle: "Kongen av Bastøy",
  releaseYear: "2011",
  sinopsys:
    "Inferno na Ilha é um drama barra pesadíssima, um soco no estômago. Baseado em fatos reais, mostra o funcionamento de uma instituição que abrigava menores infratores na ilha de Bastøy, na Noruega, em 1915. O tratamento dado aos menores é de fato infernal. É a palavra mais apropriada para descrever tanta crueldade.",
  cover: movieCover.url,
};

const Home = (): JSX.Element => {
  const classes = useStyles();

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
            src={movieCover.url}
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
              {movieData.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {`(${movieData.originalTitle})`} <br />
              {movieData.releaseYear}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              {movieData.sinopsys + movieData.sinopsys + movieData.sinopsys}
            </Typography>
          </div>
        </Container>

        {/* Botoes do Tinder */}
        <AppBar position="fixed" color="transparent" className={classes.appBar}>
          <div className={classes.bottomMenu}>
            <IconButton
              onClick={() => alert("undo last action")}
              aria-label="undo"
              color="primary"
            >
              <ReplayIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={() => alert("doesn't want to watch")}
              aria-label="dislike"
              color="primary"
            >
              <ClearIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={() => alert("already watched")}
              aria-label="like"
              color="primary"
            >
              <CheckIcon fontSize="large" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={() => alert("wants to watch")}
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

export default Home;
