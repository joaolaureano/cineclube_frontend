import { useState, useContext } from "react";
import { Movie, MovieState } from "../../../types/movie";
import { HomeDisplay } from "./HomeDisplay/HomeDisplay";
import { SharedSnackbarContext } from "../../../components/SnackBar/SnackContext";

interface HomeProps {
  state: MovieState;
}

export interface MovieStateLogic {
  functions: MovieStateLogicFunctions;
}

interface MovieStateLogicFunctions {
  handleClickWatchedAndLiked: () => void;
  handleClickUndoLastAction: () => void;
  handleClickDidntLike: () => void;
  handleClickWantoWatch: () => void;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { openSnackbar } = useContext(SharedSnackbarContext);

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
    openSnackbar("Já assiti e gostei", "success");
    incrementSelectedMovie();
  };

  // TODO: Trocar Alert por Toast
  const handleClickUndoLastAction = () => {
    openSnackbar("Desfeita a ultima ação", "success");
    decrementSelectedMovie();
  };

  const handleClickDidntLike = () => {
    openSnackbar("Não gostei", "success");
    incrementSelectedMovie();
  };

  const handleClickWantoWatch = () => {
    openSnackbar("Quero assistir", "success");
    incrementSelectedMovie();
  };

  // TODO: Passar os outros Handlers do HomeDisplay pra cá
  const useStateLogic: MovieStateLogic = {
    functions: {
      handleClickWatchedAndLiked,
      handleClickUndoLastAction,
      handleClickDidntLike,
      handleClickWantoWatch,
    },
  };

  return <HomeDisplay movie={getSelectedMovie()} logic={useStateLogic} />;
};
