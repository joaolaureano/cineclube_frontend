import { AxiosResponse } from "axios";
import api from "../api/api";
import { Movie, MovieDto, MovieMap, MovieState, CastDto } from "../types/movie";

// interface PutMoviePayload {
//   id: number;
//   status: MovieUserStatus;
// }

enum MovieUserStatus {
  ALREADY_WATCHED = "already_watched",
  WANT_TO_WATCH = "want_to_watch",
  DONT_WANT_TO_WATCH = "dont_want_to_watch",
}

const movies = {
  get: async (): Promise<AxiosResponse<MovieState>> => {
    const filters = JSON.parse(localStorage.getItem("filters") as string);
    const joinedTags = filters?.tags.join(",");
    const joinedPlatforms = filters?.platforms.join(",");

    const response = await api.get("/movies", {
      transformResponse: composeMovieState,
      params: {
        tags: joinedTags,
        platforms: joinedPlatforms,
      },
    });

    return response;
  },
  // put: (payload: PutMoviePayload) => {
  //   return api.put("/movies", payload);
  // },
};

const mapMovieDtoToMovie = (movieDto: MovieDto): Movie => {
  let movie: Movie = {
    id: movieDto.id,
    title: movieDto.title,
    originalTitle: movieDto.originalTitle,
    synopsis: movieDto.synopsis,
    critic: movieDto.critic,
    curator: movieDto.curator,
    year: movieDto.year,
    pathBanner: movieDto.pathBanner,
    platforms: movieDto.platforms,
    moviesTags: movieDto.moviesTags,
    duration: movieDto.duration,
    director: "",
    actors: [],
  };

  movieDto.cast.forEach((cast: CastDto) => {
    if (cast.director) {
      movie.director = cast.actor.name;
    } else {
      movie.actors.push(cast.actor.name);
    }
  });

  return movie;
};

const composeMovieState = (data: string): MovieState => {
  const response = JSON.parse(data);

  if (!response.success) {
    throw new Error("Erro");
  }

  const moviesResponse = response.body.movies;
  const movies: MovieMap = {};
  const movieIds: number[] = [];
  if (response.body) {
    const moviesResponse = response.body.movies;
    moviesResponse.forEach((movieDto: MovieDto) => {
      const movie: Movie = mapMovieDtoToMovie(movieDto);
      movies[movie.id] = movie;
      movieIds.push(movie.id);
    });
  }

  const selectedMovieIndex = 0;
  return { movies, movieIds, selectedMovieIndex };
};

export default movies;
