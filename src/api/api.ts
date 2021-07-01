import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

const apiUrl = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000/api/v1";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  async (config) => {
    const idToken = await firebase.auth().currentUser?.getIdToken();
    config.headers.authorization = idToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
