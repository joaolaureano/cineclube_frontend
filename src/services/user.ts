import api from "../api/api";
import { User } from "../types/user";
import { MovieUserStatus } from "../types/userMovieStatus";

interface PutMoviePayload {
  id: number;
  status: MovieUserStatus;
}

const user = {
  auth: () => {
    return api.post("/user/auth", {
      transformResponse: parseUser,
    });
  },
  setMovieStatus: (data: PutMoviePayload) => {
    const { id, status } = data;
    return api.post("/user/movie", {
      movieId: id,
      status,
    });
  },
};

const parseUser = (data: string): User => {
  const response = JSON.parse(data);
  const user: User = response.body?.user;
  return user;
};

export default user;
