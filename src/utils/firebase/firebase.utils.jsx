import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
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
const provider= new GoogleAuthProvider();
provider.setCustomParameters({
    // everytime user intracts google sign in auth then generate/prompt the avaliable the user accounts
    prompt: 'select_account'
    
});
export const auth= getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth, provider);