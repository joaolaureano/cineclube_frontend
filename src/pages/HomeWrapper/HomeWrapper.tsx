import { useHistory } from "react-router-dom";
import { MovieMap, MovieState } from "../../types/movie";
import { SharedSnackbarContext } from "../../components/SnackBar/SnackContext";
import { Home } from "./Home/Home";
import MovieService from "../../services/movies";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";

export const HomeWrapper: React.FC = () => {
  const [movieState, setMovieState] = useState({} as MovieState);
  const { openSnackbar } = useContext(SharedSnackbarContext);
  const history = useHistory();

  const getMovieList = async (selectedMovieIndex: number = 0) => {
    const response = await MovieService.get();
    const { movieIds, movies } = response.data;

    const currentMovieIds =
      selectedMovieIndex === 0
        ? []
        : movieState.movieIds.splice(0, selectedMovieIndex);

    const currentMovies: MovieMap = {};
    currentMovieIds.forEach((movieId) => {
      currentMovies[movieId] = movieState.movies[movieId];
    });

    const finalMovieIds = [...currentMovieIds, ...movieIds];
    const finalMovies = { ...currentMovies, ...movies };

    setMovieState({
      movieIds: finalMovieIds,
      movies: finalMovies,
      selectedMovieIndex,
    });
  };

  useEffect(() => {
    const setMovieList = async () => {
      try {
        await getMovieList();
      } catch (err) {
        openSnackbar("Erro ao buscar a lista de filmes recomendados.", "error");
        history.push("/");
      }
    };

    setMovieList();
  }, []);

  return (
    <>
      {movieState.movies ? (
        <Home state={movieState} updateMovieList={getMovieList} />
      ) : (
        <Spinner />
      )}
    </>
  );
  // TODO: Aqui pode ficar um componente de "Loading" enquanto acessa a API
  // TODO: Pode ficar aqui tambem um componente de "Erro" se falhar o GET
};
