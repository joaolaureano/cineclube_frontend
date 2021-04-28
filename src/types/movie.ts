import { MoviesTags } from "./moviesTags";
import { Platform } from "./platform";

export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  synopsis: string;
  critic: string;
  curator: string;
  year: number;
  pathBanner: string;
  platforms: Platform[];
  moviesTags: MoviesTags[];
  director: string;
  duration: number;
  actors: string[];
}

export interface ActorDto {
  id: number;
  name: string;
}

export interface CastDto {
  actorId: number;
  movieId: number;
  director: boolean;
  actor: ActorDto;
}

export interface MovieDto {
  id: number;
  title: string;
  originalTitle: string;
  synopsis: string;
  critic: string;
  curator: string;
  year: number;
  pathBanner: string;
  platforms: Platform[];
  moviesTags: MoviesTags[];
  duration: number;
  cast: CastDto[];
}

export interface MoviesDto {
  movies: MovieDto[];
  movieIds: number[];
}

export interface MovieState {
  movies: MovieMap;
  movieIds: number[];
  selectedMovieIndex: number;
}

export interface MovieMap {
  [movieId: number]: Movie;
}

export enum MovieUserStatus {
  ALREADY_WATCHED = "already_watched",
  WANT_TO_WATCH = "want_to_watch",
  DONT_WANT_TO_WATCH = "dont_want_to_watch",
  NONE = "none",
}
