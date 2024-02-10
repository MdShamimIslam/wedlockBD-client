import { GoogleAuthProvider,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // onAuthStateChange
 useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        if(currentUser){
          const userInfo = { email : currentUser?.email };
          axiosPublic.post('/jwt',userInfo)
          .then(res=>{
              const token = res.data.token;
              if(token){
                  localStorage.setItem('access-token',token);
                  setLoading(false);
              }
          })
      }
      else{
          localStorage.removeItem('access-token');
          setLoading(false);
      }
    })
    return ()=> unSubscribe();
 },[])

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
