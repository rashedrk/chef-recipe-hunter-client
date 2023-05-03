import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    // state to hold user data
    const [user, setUser] = useState(null);

    //Register new user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    //Update user profile to add name and photo url
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: `${name}`,
            photoURL: `${photo}`
        })
    }

    //sign in user with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in user with google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //sign in user with Github
    const githubProvider = new GithubAuthProvider();
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    //user that is login now
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        })
        return () => unsubscribe;
    },[])

    //logout user
    const logOut = () => {
        return signOut(auth)
    }
    //all auth that will pass through the context
    const AuthInfo = {
        user,
        signUp,
        updateUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;