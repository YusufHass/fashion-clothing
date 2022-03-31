import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

//for authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

//for the database while 'doc' retrieves the data
import {getFirestore,doc,getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx2SojoBV6SRWL-gDxfsvegzH6wSd_zqw",
  authDomain: "fashion-clothing-auth.firebaseapp.com",
  projectId: "fashion-clothing-auth",
  storageBucket: "fashion-clothing-auth.appspot.com",
  messagingSenderId: "796125348704",
  appId: "1:796125348704:web:4c8a1a69f2449f82d79405",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//there are differnt providers such as github and reddit or facebook etc and we use google provide
const googleProvider= new GoogleAuthProvider();
googleProvider.setCustomParameters({
    // everytime user intracts google sign in auth then generate/prompt the avaliable the user accounts
    prompt: 'select_account'
    
});
export const auth= getAuth();

//signin with google
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
//google redirect
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, googleProvider)
export const db= getFirestore();
// the following code says give me the doc reference from the db under the 
// users collections for userAuth.uid customer

//dispay name will be written in the additionalInformation for the email and password login
export const createUserDocumentFromAuth= async(userAuth, additionalInformation={})=>{
  if(!userAuth) return;
//the following is to for the database. 'uid' is the firebase instances
// that come up with firebase.
    const userDocRef= doc(db, 'users', userAuth.uid);
    const userSnapShot= await getDoc(userDocRef);

    console.log(userSnapShot);
    console.log(userSnapShot.exists());
    //check first the user data is existed and if it doesnt 
    //exist then create and set the doc
// displayName ahd email are a part of the firebase auth incentances
// you can check the instances using the console log after log in using 
// the google auth
    if(!userSnapShot.exists())
    {
      //displayName and email here is null
      const {displayName, email}= userAuth;
      const createAt= new Date();
      
      try 
      {
        await setDoc(userDocRef,
        {
          displayName,
          email,
          createAt,
          ...additionalInformation,
        })}
        catch(error)
        {
          console.log('Error creating the user', error.message);
        }
      }
      //otherwise if the userDocRef is true then return it
      return userDocRef;
    }
  export const createAuthUserWithEmailAndPasswor= async (email, password)=>{
    //if either password or email is missing then do nothing
    if(!email || !password) return

    return await createAuthUserWithEmailAndPasswor(auth, email,password)
  }