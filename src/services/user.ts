import api from "../api/api";
import { User } from "../types/user";

const user = {
  auth: () => {
    return api.post("/user/auth", {
      transformResponse: pareseUser,
    });
  },
};

const pareseUser = (data: string): User => {
  const response = JSON.parse(data);
  const user: User = response.body?.user;
  return user;
};

export default user;
