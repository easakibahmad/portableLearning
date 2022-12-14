import { createContext, useEffect, useState } from "react";
import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase/Firebase.config";

export const AuthContext =  createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {


    //theme toggler started
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    };
    //theme toggler ended

    const [user, setUser] =useState(null)

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (profileName, profileURL) =>{
        return updateProfile(auth.currentUser, profileName, profileURL)
    }

    const googlePopupSignIn = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const githubPopupSignIn = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])


    const authInfo = {
        user,
        setLoading, 
        googlePopupSignIn,
        updateUserProfile, 
        loading, 
        logIn, 
        logOut,
        createUser,
        githubPopupSignIn,
        themeToggler,
        theme
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
