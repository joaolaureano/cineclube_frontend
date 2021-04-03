// import {firebase} from '../utils/firebase'
import { firebaseAuth } from "../utils/firebase";
import firebase from "firebase";

export const logIn = () => {
  const provider = new firebaseAuth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      const token = user?.getIdToken;
      return token;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.email;

      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      console.log(errorCode, errorMessage, email, credential);
    });
};
