import { MovieMap, MovieState } from "../../types/movie";
import { Home } from "./Home/Home";
import MovieService from "../../services/movies";
import { useEffect, useState } from "react";

export const HomeWrapper: React.FC = () => {
  const [movieState, setMovieState] = useState({} as MovieState);

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
      await getMovieList();
    };

    setMovieList();
  }, []);

  return (
    <>
      {movieState.movies ? (
        <Home state={movieState} updateMovieList={getMovieList} />
      ) : (
        <p>Loading</p>
      )}
    </>
  );
  // TODO: Aqui pode ficar um componente de "Loading" enquanto acessa a API
  // TODO: Pode ficar aqui tambem um componente de "Erro" se falhar o GET
};
