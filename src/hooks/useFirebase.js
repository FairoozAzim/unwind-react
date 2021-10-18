import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    

    //google login and logout
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
    signOut(auth)
     .then(() => {
         setUser({});
     }).catch((error) => {
        //  An error happened.
      });
    }
   //email-password registration sign in
   const signInUsingEmail = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
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
        });
        return () => unsubscribed;
    },[])

    return {
        user,
        signInUsingGoogle,
        signInUsingEmail,
        logOut
    }
}

export default useFirebase;