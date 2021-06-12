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

const INTERVAL_BETWEEN_RANDOM = 6;

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
  return { movies, movieIds: reorderWithRandom(movieIds), selectedMovieIndex };
};

const getRndInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const reorderWithRandom = (movieIds: number[]) => {
  console.log(" ->" + movieIds.length);
  let i = 0;

  let newMovieIds = movieIds.slice(i, i + INTERVAL_BETWEEN_RANDOM - 1);
  let randomMovieIndex = getRndInteger(
    i + INTERVAL_BETWEEN_RANDOM,
    movieIds.length - 1
  );

  if (randomMovieIndex > movieIds.length) {
    randomMovieIndex = movieIds.length - 1;
  }

  let randomMovie = movieIds[randomMovieIndex];

  newMovieIds.push(randomMovie);
  let oldMovieIds = [...newMovieIds];

  // let firstSlice = movieIds.slice(
  //   i + INTERVAL_BETWEEN_RANDOM - 1,
  //   randomMovieIndex + i + INTERVAL_BETWEEN_RANDOM
  // );
  // // console.log("1")
  // // console.log(firstSlice)
  // let secondSlice = movieIds.slice(
  //   randomMovieIndex + 1 + i + INTERVAL_BETWEEN_RANDOM
  // );
  // // console.log("2")
  // // console.log(secondSlice);

  let firstSlice = movieIds.slice(
    i + INTERVAL_BETWEEN_RANDOM - 1,
    randomMovieIndex
  );

  let secondSlice = movieIds.slice(randomMovieIndex + 1);

  oldMovieIds = oldMovieIds.concat(firstSlice).concat(secondSlice);
  i += INTERVAL_BETWEEN_RANDOM;
  console.log(newMovieIds);
  console.log(oldMovieIds);
  console.log(randomMovieIndex);

  while (i + INTERVAL_BETWEEN_RANDOM < movieIds.length) {
    console.log(newMovieIds);
    console.log(oldMovieIds);
    newMovieIds = newMovieIds.concat(
      oldMovieIds.slice(i, i + INTERVAL_BETWEEN_RANDOM - 1)
    );

    randomMovieIndex = getRndInteger(
      i + INTERVAL_BETWEEN_RANDOM,
      movieIds.length - 1
    );

    if (randomMovieIndex > movieIds.length) {
      randomMovieIndex = movieIds.length - 1;
    }

    console.log(randomMovieIndex);

    // randomMovieIndex = getRndInteger(
    //   i + INTERVAL_BETWEEN_RANDOM,
    //   oldMovieIds.length - 1
    // );

    randomMovie = oldMovieIds[randomMovieIndex];

    newMovieIds.push(randomMovie);
    let auxMovieIds = [...newMovieIds];

    console.log("OLA");
    console.log(oldMovieIds);
    firstSlice = oldMovieIds.slice(
      i + INTERVAL_BETWEEN_RANDOM - 1,
      randomMovieIndex
    );

    console.log("1");
    console.log(firstSlice);

    secondSlice = oldMovieIds.slice(randomMovieIndex + 1);

    console.log("2");
    console.log(secondSlice);

    auxMovieIds = newMovieIds.concat(firstSlice).concat(secondSlice);

    i += INTERVAL_BETWEEN_RANDOM;

    console.log("New");
    console.log(newMovieIds);

    console.log("Old");
    console.log(oldMovieIds);

    console.log("Aux");
    console.log(auxMovieIds);

    oldMovieIds = auxMovieIds;
  }

  if (i < movieIds.length && newMovieIds.length < oldMovieIds.length) {
    newMovieIds = newMovieIds.concat(oldMovieIds.slice(i));
  }

  console.log("New");
  console.log(newMovieIds);

  return newMovieIds;
};

export default movies;
