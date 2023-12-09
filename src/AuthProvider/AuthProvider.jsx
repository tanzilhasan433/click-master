
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    // get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser);            
            if (currentUser) {
                axios.post('http://localhost:4000/jwt', { email: currentUser?.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    })
                    
            } else {
                localStorage.removeItem('access-token');
                
            }
            
        })
        return () => unsubscribe;
    }, []);

    // create user by signup 
    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //login user by google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    //logout user
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        
        return updateProfile(auth.currentUser, {
            photoURL: photo,
            displayName: name
            
        })
        
    }
    
    const authInfo = {
        user,
        loading,
        signup,
        login,
        logout,
        updateUserProfile,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

