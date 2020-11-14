import React, { useContext, useState, useEffect } from "react";
import { auth } from '../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const[currentUser, setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    function login(username, password) {
        return auth.signInWithEmailAndPassword(username, password).catch(function (error) {
            console.log(error);
        });
    }

    function signup(username, password) {
        return auth.createUserWithEmailAndPassword(username, password).catch(function(error) {
            console.log(error);
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {currentUser, signup, login};

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}


