import React, { createContext } from 'react';
import auth from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
          createUser,
          loginUser,
    }

    return (


        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;