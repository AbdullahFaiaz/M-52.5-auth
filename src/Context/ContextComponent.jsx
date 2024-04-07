import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";




const ContextComponent = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


//user state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log("on auth state change: ",currentUser)
        })
        return () => {
            unSubscribe()
        }

    },[])

//create user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
//Log In
    const signIn =(email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

//Log Out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

//giving data to the context
    const authInfo = {user,createUser,signIn,logOut,loading};
    
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

ContextComponent.propTypes = {
    children: PropTypes.node,
}
export default ContextComponent;