import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const TwitterProvider = new TwitterAuthProvider();


    const createUser = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, FacebookProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    const twitterLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, TwitterProvider)
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
              console.log("User is signed in");
            } else {
              console.log("User is signed out");
            }
          });
          

        return ()=>{
            unSubscribe()
        }
    },[]) 

    const authInfo = {
        createUser,
        updateUserProfile,
        logIn,
        googleLogin,
        facebookLogin,
        githubLogin,
        twitterLogin,
        forgotPassword,
        logOut,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;