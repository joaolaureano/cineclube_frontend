import React, { useEffect, useState } from "react";
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
import User from "../../services/user";
import { MovieUserStatus } from "../../types/userMovieStatus";
import { Movie as MovieType } from "../../types/movie";

export const MovieLists: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();
  const [currentTab, setCurrentTab] = useState(0);
  const [watchedMovies, setWatchedMovies] = useState<Object[]>([]);
  const [wantToWatchMovies, setWantToWatchMovies] = useState<Object[]>([]);

  //Testando
  useEffect(() => {
    async function getMovies() {
      const listDislikedResponse = await User.getMovieByStatus(
        MovieUserStatus.WATCHED_AND_DISLIKED
      );
      const listDisliked = listDislikedResponse.data;

      const listLikedResponse = await User.getMovieByStatus(
        MovieUserStatus.WATCHED_AND_LIKED
      );
      const listLiked = listLikedResponse.data;

      const listWantToWatchResponse = await User.getMovieByStatus(
        MovieUserStatus.WANT_TO_WATCH
      );
      const listWantToWatch = listWantToWatchResponse.data;

      const listWatched: MovieType[] = [...listLiked, ...listDisliked];
      const listWantToWatchAux: MovieType[] = [...listWantToWatch];

      setWantToWatchMovies(listWantToWatchAux);
      setWatchedMovies(listWatched);
    }

    getMovies();
  }, []);

  const handleClickBack = () => {
    history.goBack();
  };

  const handleListChange = (event: React.ChangeEvent<{}>, tab: number) => {
    setCurrentTab(tab);
  };

  const handleLike = (id: number) => {
    alert(`Clicked LIKE on movie ${id}`);
  };

  const handleDislike = (id: number) => {
    alert(`Clicked DISLIKE on movie ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Clicked DELETE on movie ${id}`);
  };

  const handleWatch = (id: number) => {
    alert(`Clicked WATCH on movie ${id}`);
  };

  const renderWatchedMovies = () => {
    return watchedMovies.length > 0
      ? watchedMovies.map((movie: any) => {
          return (
            <MovieCard
              key={movie.movie.id}
              type="watched"
              liked={movie.status === MovieUserStatus.WATCHED_AND_LIKED}
              onDelete={handleDelete}
              onLike={handleLike}
              onDislike={handleDislike}
              movie={{
                id: movie.movie.id,
                title: movie.movie.title,
                pathBanner: movie.movie.pathBanner,
                platforms: movie.movie.platforms,
              }}
            />
          );
        })
      : null;
  };

  const renderWantToWatchMovies = () => {
    return wantToWatchMovies.length > 0
      ? wantToWatchMovies.map((movie: any) => {
          return (
            <MovieCard
              key={movie.movie.id}
              type="wantsToWatch"
              onDelete={handleDelete}
              onWatch={handleWatch}
              movie={{
                id: movie.movie.id,
                title: movie.movie.title,
                pathBanner: movie.movie.pathBanner,
                platforms: movie.movie.platforms,
              }}
            />
          );
        })
      : null;
  };

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <IconButton className={styles.backIcon} onClick={handleClickBack}>
            <ArrowBack fontSize="large" />
          </IconButton>
          <Typography className={styles.pageTitle} variant="h5">
            Minhas Listas
          </Typography>
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
          {currentTab === 0 ? renderWantToWatchMovies() : renderWatchedMovies()}
        </div>
      </Container>
    </div>
  );
};
