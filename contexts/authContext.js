import React, { useContext, useEffect, useState } from "react";
import firebase, { auth } from "../config/firebaseConfig";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProdiver({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function signup(email, password, fullname) {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      let db = firebase.firestore()

      try {
        await db.collection("users").doc(userCredential.user.uid).set({
          fullname: fullname || userCredential.user.displayName || "",
          location: "",
          monthlyData: [],
        })
      } catch (error) {
        setError(error)
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    setError(null);
    const provider = new auth.GoogleAuthProvider();
    
    // having issues -- try to solve

    auth
      .signInWithPopup(provider)
      .then((userCredential) => {
        db.collection("users").doc(userCredential.user.uid).set({
          fullname: fullname || userCredential.user.displayName || "",
          location: "",
          monthlyData: [],
        })
      })
      .catch((error) => {
        setError(error);
      });

    setLoading(false);
  };

  async function login(email, password) {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  async function logout() {
    setLoading(true);
    try {
      await auth.signOut();
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true)
      setError()
    }
    else {setIsLoggedIn(false)}
  }, [currentUser])

  const values = {
    isLoggedIn,
    loading,
    currentUser,
    login,
    logout,
    signup,
    signInWithGoogle,
    error,
    setError,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>

}
