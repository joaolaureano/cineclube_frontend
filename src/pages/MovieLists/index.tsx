import React, { useEffect, useState } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";

import {
  Container,
  IconButton,
  Paper,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";

import { ArrowBack } from "@material-ui/icons";
import { MovieCard } from "./MovieCard";
import { MovieUserStatus } from "../../types/userMovieStatus";
import { UserMovie } from "../../types/UserMovie";
import UserService from "../../services/user";

import useStyles from "./styles";

interface Params {
  list: "watched" | "wantToWatch";
}

export const MovieLists = ({ match }: RouteComponentProps<Params>) => {
  const history = useHistory();
  const styles = useStyles();

  const { list } = match.params;
  const defaultList = list === "watched" ? 1 : 0;
  const [currentTab, setCurrentTab] = useState(defaultList);
  const [watchedMovies, setWatchedMovies] = useState<Object[]>([]);
  const [wantToWatchMovies, setWantToWatchMovies] = useState<Object[]>([]);

  //Testando
  useEffect(() => {
    async function getMovies() {
      const listDislikedResponse = await UserService.getMovieByStatus(
        MovieUserStatus.WATCHED_AND_DISLIKED
      );
      const listDisliked = listDislikedResponse.data;

      const listLikedResponse = await UserService.getMovieByStatus(
        MovieUserStatus.WATCHED_AND_LIKED
      );
      const listLiked = listLikedResponse.data;

      const listWantToWatchResponse = await UserService.getMovieByStatus(
        MovieUserStatus.WANT_TO_WATCH
      );
      const listWantToWatch = listWantToWatchResponse.data;

      const listWatched: UserMovie[] = [...listLiked, ...listDisliked];
      const listWantToWatchAux: UserMovie[] = [...listWantToWatch];

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
              key={`watched-${movie.movie.id}`}
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
              key={`wanted-${movie.movie.id}`}
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
