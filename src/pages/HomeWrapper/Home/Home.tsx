import { useState } from "react";
import { Movie, MovieState } from "../../../types/movie";
import { HomeDisplay } from "./HomeDisplay/HomeDisplay";

interface HomeProps {
  state: MovieState;
}

export interface MovieStateLogic {
  functions: MovieStateLogicFunctions;
}

interface MovieStateLogicFunctions {
  handleClickWatchedAndLiked: () => void;
  handleClickUndoLastAction: () => void;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { state } = props;

  const [selectedMovieIndex, setSelectedMovieIndex] = useState(
    state.selectedMovieIndex
  );

  const getSelectedMovie = (): Movie => {
    return state.movies[state.movieIds[selectedMovieIndex]];
  };

  const incrementSelectedMovie = (): void => {
    const numberOfMovies = state.movieIds.length;
    let newMovieIndex = selectedMovieIndex + 1;
    if (newMovieIndex >= numberOfMovies) {
      newMovieIndex = 0;
    }
    setSelectedMovieIndex(newMovieIndex);
  };

  const decrementSelectedMovie = (): void => {
    const numberOfMovies = state.movieIds.length;
    let newMovieIndex = selectedMovieIndex - 1;
    if (newMovieIndex <= 0) {
      newMovieIndex = numberOfMovies - 1;
    }
    setSelectedMovieIndex(newMovieIndex);
  };

  // TODO: Trocar Alert por Toast
  const handleClickWatchedAndLiked = () => {
    alert("already watched");
    incrementSelectedMovie();
  };

  // TODO: Trocar Alert por Toast
  const handleClickUndoLastAction = () => {
    alert("undo last action");
    decrementSelectedMovie();
  };

  // TODO: Passar os outros Handlers do HomeDisplay pra cá
  const useStateLogic: MovieStateLogic = {
    functions: {
      handleClickWatchedAndLiked,
      handleClickUndoLastAction,
    },
  };

  return <HomeDisplay movie={getSelectedMovie()} logic={useStateLogic} />;
};
