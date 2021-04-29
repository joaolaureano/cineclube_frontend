import { Movie } from "./movie";

export interface UserMovie {
  movieId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  movie: Movie;
}
