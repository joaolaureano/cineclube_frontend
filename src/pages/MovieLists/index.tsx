import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  IconButton,
  Paper,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";

import { ArrowBack } from "@material-ui/icons";

import useStyles from "./styles";
import { MovieCard } from "./MovieCard";

const mockMovie = {
  id: 15,
  title: "A Viagem de Chihiro",
  originalTitle: "Spirited Away",
  synopsis:
    "Uma menina de 10 anos se perde em um mundo de bruxas e espíritos, embarcando em uma jornada repleta de simbolismo e sensibilidade.",
  critic: "Nada é esquecido. Mesmo que você não se lembre.",
  curator: "Renato Weber",
  year: "2001",
  pathBanner:
    "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg",
  platforms: ["Netflix", "Amazon-Prime-Video"],
};

const watchedMoviesMock = [1, 2, 3, 4, 5, 6].map((fakeId) => {
  return {
    id: fakeId,
    title: mockMovie.title,
    pathBanner: mockMovie.pathBanner,
    platforms: mockMovie.platforms,
    liked: fakeId % 2 === 0,
  };
});

const wantToWatchMoviesMock = [1, 2, 3, 4, 5, 6].map((fakeId) => {
  return {
    id: fakeId + 6,
    title: mockMovie.title,
    pathBanner: mockMovie.pathBanner,
    platforms: mockMovie.platforms,
  };
});

export const MovieLists: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();
  const [currentTab, setCurrentTab] = useState(0);
  const [watchedMovies, setWatchedMovies] = useState(watchedMoviesMock);
  const [wantToWatchMovies, setWantToWatchMovies] = useState(
    wantToWatchMoviesMock
  );

  const handleClickBack = () => {
    history.goBack();
  };

  const handleListChange = (event: React.ChangeEvent<{}>, tab: number) => {
    setCurrentTab(tab);
  };

  const handleLike = (id: number) => {
    console.log(`Clicked LIKE on movie ${id}`);
  };

  const handleDislike = (id: number) => {
    console.log(`Clicked DISLIKE on movie ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Clicked DELETE on movie ${id}`);
  };

  const handleWatch = (id: number) => {
    console.log(`Clicked WATCH on movie ${id}`);
  };

  const renderWatchedMovies = () => {
    return watchedMovies.map((movie) => {
      return (
        <MovieCard
          type="watched"
          liked={movie.liked}
          onDelete={handleDelete}
          onLike={handleLike}
          onDislike={handleDislike}
          movie={{
            id: movie.id,
            title: movie.title,
            pathBanner: movie.pathBanner,
            platforms: movie.platforms,
          }}
        />
      );
    });
  };

  const renderWantToWatchMovies = () => {
    return wantToWatchMovies.map((movie) => {
      return (
        <MovieCard
          type="wantsToWatch"
          onDelete={handleDelete}
          onWatch={handleWatch}
          movie={{
            id: movie.id,
            title: movie.title,
            pathBanner: movie.pathBanner,
            platforms: movie.platforms,
          }}
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
          <Typography variant="h5">Minhas Listas</Typography>
        </header>

        <Paper elevation={0} className={styles.tabsContainer}>
          <Tabs
            className={styles.tabs}
            value={currentTab}
            onChange={handleListChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab className={styles.tab} tabIndex={0} label="Quero Assistir" />
            <Tab className={styles.tab} tabIndex={1} label="Já vi" />
          </Tabs>
        </Paper>

        <div className={styles.movieList}>
          {currentTab === 0 ? renderWatchedMovies() : renderWantToWatchMovies()}
        </div>
      </Container>
    </div>
  );
};
