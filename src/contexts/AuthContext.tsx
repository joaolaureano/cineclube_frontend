import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

interface AuthContextData {
  login: () => Promise<string | undefined>;
  logout: () => Promise<boolean | undefined>;
  getToken: () => Promise<string | undefined>;
  hasSession: boolean;
  isLoadingUser: boolean;
  isLoggingIn: boolean;
  setIsLoggingIn: (value: boolean) => void;
  authUser: firebase.User | null;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const [authUser, setAuthUser] = useState(firebase.auth().currentUser);
  const [hasSession, setHasSession] = useState(!!localStorage.getItem("token"));
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setAuthUser(user);
      setHasSession(!!localStorage.getItem("token"));
    });
  }, []);

  useEffect(() => {
    setIsLoadingUser(hasSession && authUser === null);
  }, [hasSession, authUser]);

  const login = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      const token = await user?.getIdToken();

      setToken(token);
      return token;
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    try {
      removeToken();
      localStorage.clear();
      await firebase.auth().signOut();
      return true;
    } catch (err) {
      console.log(err.message);
    }
  };

  const setToken = (token?: string) => {
    if (token) {
      localStorage.setItem("token", token);
      setHasSession(true);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setHasSession(false);
  };

  const getToken = async () => {
    removeToken();
    try {
      const token = await authUser?.getIdToken();
      setToken(token);
      return token;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        getToken,
        hasSession,
        isLoadingUser,
        isLoggingIn,
        setIsLoggingIn,
        authUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
