import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    

    //google login and logout
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
    setIsLoading(true);
    signOut(auth)
     .then(() => {
         setUser({});
     }).finally(() => setIsLoading(false));
    }
   //email-password registration sign in
   const registrationUsingEmail = (name,email,password) => {

    createUserWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user);
      // ...
    })
   }

   //sign in 
   const signInUsingEmail = (email,password) => {
    setIsLoading(true);   
    return signInWithEmailAndPassword(auth, email, password)
   }

   //signout 
   const signOutUsingEmail = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
        setUser({});
      }).finally(() => setIsLoading(false));
   }
    //observer
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth,(user)=> {
            if(user){
                setUser(user);
            } 
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    return {
        user,
        signInUsingGoogle,
        logOut,
        registrationUsingEmail,
        signInUsingEmail,
        signOutUsingEmail,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;