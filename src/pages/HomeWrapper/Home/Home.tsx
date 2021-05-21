import { useState, useContext } from "react";
import { Movie, MovieState } from "../../../types/movie";
import { HomeDisplay } from "./HomeDisplay/HomeDisplay";
import { SharedSnackbarContext } from "../../../components/SnackBar/SnackContext";
import { MovieUserStatus } from "../../../types/userMovieStatus";
import UserService from "../../../services/user";
import { useHistory } from "react-router-dom";

interface HomeProps {
  state: MovieState;
  updateMovieList: (selectedMovieIndex?: number) => void;
}

export interface MovieStateLogic {
  functions: MovieStateLogicFunctions;
}

interface MovieStateLogicFunctions {
  handleClickWatched: () => void;
  handleClickUndoLastAction: () => void;
  handleClickDontWantToWatch: () => void;
  handleClickWantoWatch: () => void;
  handleClickLikeOrNotMovie: () => void;
  handleClickLikedMovie: () => void;
  handleClickDislikedMovie: () => void;
  handleCloseModal: () => void;
  handleClickGoToFilterPage: () => void;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { openSnackbar } = useContext(SharedSnackbarContext);

  const { state, updateMovieList } = props;

  const history = useHistory();

  const [selectedMovieIndex, setSelectedMovieIndex] = useState(
    state.selectedMovieIndex
  );
  const [openModal, setOpenModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const getSelectedMovie = (): Movie => {
    return state.movies[state.movieIds[selectedMovieIndex]];
  };

  const getPreviousMovie = (): Movie => {
    return state.movies[state.movieIds[selectedMovieIndex - 1]];
  };

  const incrementSelectedMovie = async (): Promise<void> => {
    const numberOfMovies = state.movieIds.length;
    let newMovieIndex = selectedMovieIndex + 1;
    if (newMovieIndex >= numberOfMovies) {
      const filters: { tags?: number[]; platforms?: string[] } = {};

      if (filters) {
        clearFilters();
        await updateMovieList(selectedMovieIndex + 1);
      } else {
        // Implementar FIX 06 - US00 aqui
      }
    }
    setSelectedMovieIndex(newMovieIndex);
  };

  const clearFilters = () => {
    localStorage.removeItem("filters");
    openSnackbar(
      "Você chegou ao fim da lista. Os filtros foram resetados.",
      "info"
    );
  };

  const decrementSelectedMovie = (): void => {
    const numberOfMovies = state.movieIds.length;
    let newMovieIndex = selectedMovieIndex - 1;
    if (newMovieIndex < 0) {
      newMovieIndex = numberOfMovies - 1;
    }
    setSelectedMovieIndex(newMovieIndex);
  };

  const handleClickWantoWatch = async () => {
    openSnackbar("Quero assistir", "info");

    const movieID = String(getSelectedMovie().id);
    await UserService.setMovieStatus({
      id: movieID,
      status: MovieUserStatus.WANT_TO_WATCH,
    });
    incrementSelectedMovie();
  };
  const handleClickLikeOrNotMovie = () => {};

  const handleClickUndoLastAction = async () => {
    const previousMovieId = selectedMovieIndex - 1;
    if (previousMovieId < 0) return;

    const movieId = String(getPreviousMovie().id);
    await UserService.setMovieStatus({
      id: movieId,
      status: MovieUserStatus.NONE,
    });

    openSnackbar("Desfeita a ultima ação", "success");
    decrementSelectedMovie();
  };

  const handleClickDontWantToWatch = async () => {
    openSnackbar("Não quero assistir", "info");

    const movieID = String(getSelectedMovie().id);
    await UserService.setMovieStatus({
      id: movieID,
      status: MovieUserStatus.DONT_WANT_TO_WATCH,
    });
    incrementSelectedMovie();
  };

  const handleClickWatched = () => {
    setOpenModal(!openModal);
  };

  const handleClickGoToFilterPage = () => {
    history.push("/filter");
  };

  const handleClickDislikedMovie = async () => {
    console.log("Disliked");
    const movieID = String(getSelectedMovie().id);
    setOpenModal(!openModal);
    await UserService.setMovieStatus({
      id: movieID,
      status: MovieUserStatus.WATCHED_AND_DISLIKED,
    });
    incrementSelectedMovie();
    openSnackbar("Não gostei do filme", "info");
  };

  const handleClickLikedMovie = async () => {
    console.log("Liked");
    const movieID = String(getSelectedMovie().id);
    setOpenModal(!openModal);

    const response = await UserService.setMovieStatus({
      id: movieID,
      status: MovieUserStatus.WATCHED_AND_LIKED,
    });

    if (response.data.success) {
      await updateMovieList(selectedMovieIndex + 1);
      incrementSelectedMovie();
      return openSnackbar("Gostei do filme", "info");
    }

    openSnackbar("Erro ao adicionar filme", "error");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const useStateLogic: MovieStateLogic = {
    functions: {
      handleClickWatched,
      handleClickUndoLastAction,
      handleClickDontWantToWatch,
      handleClickWantoWatch,
      handleClickLikeOrNotMovie,
      handleClickLikedMovie,
      handleClickDislikedMovie,
      handleCloseModal,
      handleClickGoToFilterPage,
    },
  };

  return (
    <HomeDisplay
      movie={getSelectedMovie()}
      logic={useStateLogic}
      modalLiked={openModal}
    />
  );
};
