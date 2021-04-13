import axios from "axios";
import firebase from "firebase";

const apiUrl = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000/api/v1";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  async (config) => {
    config.headers.authorization = await firebase
      .auth()
      .currentUser?.getIdToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
