import { MovieState } from "../../types/movie";
import { Home } from "./Home/Home";
import MovieService from "../../services/movies";
import { useEffect, useState } from "react";

export const HomeWrapper: React.FC = () => {
  const [movieState, setMovieState] = useState({} as MovieState);

  useEffect(() => {
    const getMovies = async () => {
      const response = await MovieService.get();
      const { movieIds, movies } = response.data;
      setMovieState({
        movieIds,
        movies,
        selectedMovieIndex: 0,
      });
    };

    getMovies();
  }, []);

  return (
    <>{movieState.movies ? <Home state={movieState} /> : <p>Loading</p>}</>
  );
  // TODO: Aqui pode ficar um componente de "Loading" enquanto acessa a API
  // TODO: Pode ficar aqui tambem um componente de "Erro" se falhar o GET
};
