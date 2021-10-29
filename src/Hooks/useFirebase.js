import initializeAuthentication from "../pages/Login/Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // signInHandler
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))


    }


    // special observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers([])
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])


    // logOut handler
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUsers([]);
            })
            .finally(() => setIsLoading(false))
    }

    // all return
    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }

}

export default useFirebase;