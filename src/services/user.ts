import { AxiosResponse } from "axios";
import api from "../api/api";
import { Movie, MovieMap, MovieStatus } from "../types/movie";
import { User } from "../types/user";
import { UserMovie } from "../types/UserMovie";
import { MovieUserStatus } from "../types/userMovieStatus";

interface PutMoviePayload {
  id: string;
  status: MovieUserStatus;
}

const user = {
  auth: () => {
    return api.post("/user/auth", {
      transformResponse: parseUser,
    });
  },

  setMovieStatus: (data: PutMoviePayload) => {
    const { id, status } = data;
    return api.post("/user/movie", {
      movieId: id,
      status,
    });
  },

  getMovieByStatus: (
    data: MovieUserStatus
  ): Promise<AxiosResponse<Movie[]>> => {
    return api.get("/user/movie/" + data, {
      transformResponse: parseMovieCardInfo,
    });
  },
};

const parseMovieCardInfo = (data: string): UserMovie[] => {
  const response = JSON.parse(data);
  const moviesResponse = response.body.userMovies;
  const movies: UserMovie[] = [];
  moviesResponse.map((movie: any) => {
    movies.push(movie as UserMovie);
  });

  return movies;
};

const parseUser = (data: string): User => {
  const response = JSON.parse(data);
  const user: User = response.body?.user;
  return user;
};

export default user;
