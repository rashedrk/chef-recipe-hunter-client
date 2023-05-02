import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    //Register new user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    //all auth that will pass through the context
    const AuthInfo = {
        signUp
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;