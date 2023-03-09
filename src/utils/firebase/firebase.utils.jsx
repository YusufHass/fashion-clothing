import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

//for authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // onAuthStateChanged keeps our user data such as sign-in and out in one palace.
  //earlier we had to track user activity in sign-in, sign-out and navigation
  //component using  setCurrentUser(user) which no more important as onAuthStateChanged centralize all

  onAuthStateChanged
} from "firebase/auth";

//for the database while 'doc' retrieves the data
//for fetching data from firebase we use query and getDocs


import {getFirestore,doc,getDoc, setDoc, collection, writeBatch,query,getDocs} from 'firebase/firestore'
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

//the following collection is used to store/add our cloth collection into a database. 
//collectionKey will representing the name of our data collection and  
//objectsToAdd is the fil we have in the shop-data.js
export const addCollectionAndDocuments= async (collectionKey, objectsToAdd)=>{
  //collectionRef is used as reference to go our db-the name of the entire collection where we store our data and collectionKey is the name of our collection under our db
//go to the db and find the spacific collection called collectionKey
  const collectionRef= collection(db, collectionKey );
//transaction is a sucessful unit of work in the database.
//example, if we transfer a money from one accoount to 
//another account then the whole process and successful transaction
//called a transaction. If it fails then we say the transaction is
// failed

// batch is instance of writeBatch function and used to do anything such as delete, add, remove the files we have in db
const batch= writeBatch(db);

objectsToAdd.forEach((object)=>{
  const docRef= doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef, object)
})
await batch.commit();
console.log('done');

}
//since google and any library could change their implementation
// anytime then using a self declared separate function
//decreases the overall impact of our application. If any of the
// following firebase functions change then the only thing
//we need to change is that specific change here in our function. That is one of 
// the benefits that isolating the functions based on what they specifically do
export const getCatagoriesAndDocuments= async ()=>{

  const collectionRef= collection(db, 'categories');
  const q= query(collectionRef);
  const querySnapshot= await getDocs(q);

  // const categoryMap=querySnapshot.docs.reduce((accumulator,
  //   docSnapshot)=>{

  //     const{title, items}= docSnapshot.data();
  //     accumulator[title.toLowerCase()]=items;
  //     return accumulator;
  //   },{})
  //   return categoryMap;

  return querySnapshot.docs.map(doSnapShot=>doSnapShot.data())
}

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

    // console.log(userSnapShot);
    // console.log(userSnapShot.exists());
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

  export const signInAuthUserWithEmailAndPassword= async (email, password)=>{
    //if either password or email is missing then do nothing
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email,password)
  }
//the signout firebase method used to make the user sign out. THe auth tracks the current sign-in user
  export const signOutUser= async()=> await signOut(auth)


  //listens the changes of our application. Example when we sign
  //in or sign-out both time reacts to the change and callback is invoked
  export const onAuthStateChangedListner=(callback)=>{

    onAuthStateChanged(auth, callback)
  }