import { useEffect, useState, useCallback } from "react";
import { firebaseAuth } from "../utils/firebase";

const useFirebase = () => {
  const [authUser, setAuthUser] = useState(firebaseAuth().currentUser);

  useEffect(() => {
    const unsubscribe = firebaseAuth().onAuthStateChanged((user) =>
      setAuthUser(user)
    );
    return () => {
      console.log(authUser);
      unsubscribe();
    };
  }, []);

  const login = useCallback(
    () => firebaseAuth().signInWithPopup(new firebaseAuth.GoogleAuthProvider()),
    []
  );

  const logout = useCallback(() => firebaseAuth().signOut(), []);

  return { login, authUser, logout };
};

export { useFirebase };
