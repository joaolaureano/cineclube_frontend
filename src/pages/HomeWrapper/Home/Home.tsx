import { Movie, MovieState } from "../../../types/movie";
import { HomeDisplay } from "./HomeDisplay/HomeDisplay";

interface HomeProps {
  state: MovieState;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { state } = props;

  const getSelectedMovie = (): Movie => {
    return state.movies[state.movieIds[state.selectedMovieIndex]];
  };

  return <HomeDisplay movie={getSelectedMovie()} />;
};
