import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleLoading = (isLoad) => {
        isLoad ? setLoading(true) : setLoading(false);
    };

    const signIn = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password);
    };

    const signUp = async (email, password) => {
        handleLoading(true);
        await auth.createUserWithEmailAndPassword(email, password);
        handleLoading(false);
    };

    const signOut = () => {
        auth.signOut();
    };

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user.email);
            } else {
                setCurrentUser('');
            }
        });
    }, []);

    const value = {
        currentUser,
        signIn,
        signUp,
        signOut,
        loading,
        handleLoading
    }

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    )
};

