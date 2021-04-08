import { Platform } from "./platform";
import { Tag } from "./tag";

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
  tags: Tag[];
  createdAt: Date;
  updatedAt: Date;
}

// export interface MovieState {
//   movies: MovieMap;
//   movieIds: string[];
//   selectedMovieId: number;
// }

// interface MovieMap {
//   [movieId: number] : Movie;
// }

// TODO: Decide best way to structure Movie State, maybe normalize as commented above?
export interface MovieState {
  movies: Movie[];
  selectedMovieIndex: number;
}
