import { AxiosResponse } from "axios";
import api from "../api/api";
import { Movie, MovieMap, MoviesDto, MovieState } from "../types/movie";

interface PutMoviePayload {
  id: number;
  status: MovieUserStatus;
}

enum MovieUserStatus {
  ALREADY_WATCHED = "already_watched",
  WANT_TO_WATCH = "want_to_watch",
  DONT_WANT_TO_WATCH = "dont_want_to_watch",
}

const movies = {
  get: (): Promise<AxiosResponse<MoviesDto>> => {
    return api.get("/movies", {
      transformResponse: composeMovieState,
    });
  },
  put: (payload: PutMoviePayload) => {
    return api.put("/movies", payload);
  },
};

const composeMovieState = (data: string): MovieState => {
  const response = JSON.parse(data);
  const moviesResponse = response.body.movies;
  const movies: MovieMap = {};

  const movieIds = moviesResponse.map((movie: Movie) => {
    movies[movie.id] = movie as Movie;
    return movie.id;
  });

  const selectedMovieIndex = 0;
  return { movies, movieIds, selectedMovieIndex };
};

export default movies;
