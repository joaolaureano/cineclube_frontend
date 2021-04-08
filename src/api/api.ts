import axios from "axios";
import firebase from "firebase";

const api = axios.create();
api.interceptors.request.use(
  async (config) => {
    config.headers.token = await firebase.auth().currentUser?.getIdToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
