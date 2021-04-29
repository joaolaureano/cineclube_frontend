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

import { ArrowBack, Movie } from "@material-ui/icons";

import useStyles from "./styles";
import { MovieCard } from "./MovieCard";
import User from "../../services/user";
import { MovieUserStatus } from "../../types/userMovieStatus";
import { Movie as MovieType } from "../../types/movie";

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
  const [watchedMovies, setWatchedMovies] = useState<Object[]>([{}]);
  const [wantToWatchMovies, setWantToWatchMovies] = useState<Object[]>([{}]);

  //Testando
  useEffect(() => {
    async function getMovies() {
      const listDesliked = await User.getMovieByStatus(
        MovieUserStatus.WATCHED_AND_DISLIKED
      );
      const listLiked = await User.getMovieByStatus(
        MovieUserStatus.WATCHED_AND_LIKED
      );
      const listWantToWatch = await User.getMovieByStatus(
        MovieUserStatus.WANT_TO_WATCH
      );

      const listWatched: MovieType[] = [];

      if (listLiked.data.length > 0) {
        console.log(listLiked.data);
        for (let i = 0; i < listLiked.data.length; i++) {
          listWatched.push(listLiked.data[i]);
        }
      }
      if (listDesliked.data.length > 0) {
        console.log(listDesliked.data);
        for (let i = 0; i < listDesliked.data.length; i++) {
          listWatched.push(listDesliked.data[i]);
        }
      }

      setWatchedMovies(listWatched);
      setWantToWatchMovies(listWantToWatch.data);
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
    return watchedMovies.map((movie: any) => {
      return (
        <MovieCard
          key={movie.movie.id}
          type="watched"
          liked={true}
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
    });
  };

  const renderWantToWatchMovies = () => {
    console.log(wantToWatchMovies);
    return wantToWatchMovies.map((movie: any) => {
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
