import { useEffect, useState, useCallback } from "react";
import firebase from "firebase";

const firebaseAuth = firebase.auth;

const useFirebase = () => {
  const [authUser, setAuthUser] = useState(firebaseAuth().currentUser);

  useEffect(() => {
    const unsubscribe = firebaseAuth().onAuthStateChanged((user) => {
      setAuthUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async () => {
    try {
      const provider = new firebaseAuth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      const token = await user?.getIdToken();

      return token;
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    try {
      await firebaseAuth().signOut();
      return true;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getToken = async () => {
    localStorage.removeItem("token");

    try {
      const token = await authUser?.getIdToken();
      if (token) localStorage.setItem("token", token);
      return token;
    } catch (err) {
      console.log(err.message);
    }
  };

  return { authUser, logout, login, getToken };
};

export { useFirebase };
