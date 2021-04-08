import { AxiosResponse } from "axios";
import api from "../api/api";
import { Movie, MovieState } from "../types/movie";

const movies = {
  get: (): Promise<AxiosResponse<Movie[]>> => {
    return api.get("/movies", {
      transformResponse: composeMovieState,
    });
  },
};

const composeMovieState = (data: string): MovieState => {
  const movies: Movie[] = JSON.parse(data);
  const selectedMovieIndex = 0;
  return { movies, selectedMovieIndex };
};

export default movies;
