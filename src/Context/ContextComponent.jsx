import { createContext, useState } from "react";
export const AuthContext = createContext(null)
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";



const ContextComponent = ({children}) => {

    const [user,setUser] = useState(null)

    const auth = getAuth(app)
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {user,createUser,};


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