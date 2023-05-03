import React, { createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {

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
    //all auth that will pass through the context
    const AuthInfo = {
        signUp,
        updateUser,
        signIn,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;