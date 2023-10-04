import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebaseconfig";
export const authContext = createContext(null)

const auth = getAuth(app)

const Provider = ({children}) => {

    const [loading,setloading] = useState(true)

    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setloading(true)
        return signOut(auth)
    }

    const singIn = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setloading(false);
        });
        return () =>{
            unSubscribe();
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        singIn
    }



    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Provider;