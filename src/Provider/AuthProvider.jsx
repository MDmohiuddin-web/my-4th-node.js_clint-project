import React, { createContext, useState } from "react";
import { auth } from "./Firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
//   console.log(children);
  const [user, setUser] = useState(null);
  const [Loding, setLoding] = useState(true);

  const sign_up = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  const login = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const info = { user, setUser, sign_up, login , setLoding};
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
