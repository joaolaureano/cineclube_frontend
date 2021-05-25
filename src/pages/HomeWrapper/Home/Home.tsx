import { useState, useContext } from "react";
import {
  Movie,
  MovieState,
  RecommendedMovieMessage,
} from "../../../types/movie";
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
  handleCloseModalRecommend: () => void;
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

  const [openModalRecommend, setOpenModalRecommend] = useState(false);

  const [recommendMovie, setRecommendMovie] = useState<
    RecommendedMovieMessage | undefined
  >();

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
      const filters = localStorage.getItem("filters");

      if (filters) {
        clearFilters();
        await updateMovieList(selectedMovieIndex + 1);
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
    const movieID = String(getSelectedMovie().id);

    try {
      await UserService.setMovieStatus({
        id: movieID,
        status: MovieUserStatus.WANT_TO_WATCH,
      });

      const listWantToWatchResponse = await UserService.getMovieByStatus(
        MovieUserStatus.WANT_TO_WATCH
      );

      const listWantToWatch = listWantToWatchResponse.data;

      if (listWantToWatch.length % 10 === 0) {
        const pos = Math.round(Math.random() * (listWantToWatch.length - 1));
        const selectedMovie = listWantToWatch[pos];
        //const displayMovie:RecommendedMovieMessage = {
        //  platform:
        //}
      }

      openSnackbar("Quero assistir", "info");
      incrementSelectedMovie();
    } catch (err) {
      openSnackbar("Opa! Ocorreu um erro!", "error");
    }
  };

  const handleClickLikeOrNotMovie = () => {};

  const handleClickUndoLastAction = async () => {
    const previousMovieId = selectedMovieIndex - 1;
    if (previousMovieId < 0) return;

    const movieId = String(getPreviousMovie().id);

    try {
      await UserService.setMovieStatus({
        id: movieId,
        status: MovieUserStatus.NONE,
      });

      openSnackbar("Desfeita a ultima ação", "success");
      decrementSelectedMovie();
    } catch (err) {
      openSnackbar("Opa! Ocorreu um erro!", "error");
    }
  };

  const handleClickDontWantToWatch = async () => {
    const movieID = String(getSelectedMovie().id);

    try {
      await UserService.setMovieStatus({
        id: movieID,
        status: MovieUserStatus.DONT_WANT_TO_WATCH,
      });

      openSnackbar("Não quero assistir", "info");
      incrementSelectedMovie();
    } catch (err) {
      openSnackbar("Opa! Ocorreu um erro!", "error");
    }
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

    try {
      await UserService.setMovieStatus({
        id: movieID,
        status: MovieUserStatus.WATCHED_AND_DISLIKED,
      });

      incrementSelectedMovie();
      openSnackbar("Não gostei do filme", "info");
    } catch (err) {
      openSnackbar("Erro ao adicionar filme", "error");
    }
  };

  const handleClickLikedMovie = async () => {
    console.log("Liked");
    const movieID = String(getSelectedMovie().id);
    setOpenModal(!openModal);

    try {
      await UserService.setMovieStatus({
        id: movieID,
        status: MovieUserStatus.WATCHED_AND_LIKED,
      });

      await updateMovieList(selectedMovieIndex + 1);
      incrementSelectedMovie();
      return openSnackbar("Gostei do filme", "info");
    } catch (err) {
      openSnackbar("Erro ao adicionar filme", "error");
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseModalRecommend = () => {
    setOpenModalRecommend(false);
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
      handleCloseModalRecommend,
      handleClickGoToFilterPage,
    },
  };

  return (
    <HomeDisplay
      movie={getSelectedMovie()}
      logic={useStateLogic}
      modalLiked={openModal}
      modalRecommendedMovie={openModalRecommend}
    />
  );
};
