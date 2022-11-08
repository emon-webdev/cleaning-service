import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.init";

const auth = getAuth(app);

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //create user for firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user for firebase
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //set profile and name
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //sign out user from ui
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser, "current User ");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  //send Data any where
  const authInfo = {
    user,
    loading,
    updateUserProfile,
    googleLogin,
    createUser,
    logOut,
    signIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
