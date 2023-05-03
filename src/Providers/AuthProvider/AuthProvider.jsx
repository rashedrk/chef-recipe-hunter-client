import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
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

    //all auth that will pass through the context
    const AuthInfo = {
        signUp,
        updateUser
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;