// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
// import { async } from "@firebase/util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'
const Authentication = () => {
// useEffect(async ()=>{
// const response= await getRedirectResult(auth);
// // console.log(response);
// if(response) {
//   const userDocRef = await createUserDocumentFromAuth(response.user);
// }

//   },[]);
//   const logGoogleUser = async () => {
//     // const response = await signInWithGooglePopup();
//     // console.log(response);

//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   };
  return (
    <div className="authentication-container">
      {/* <h1>Sign In Page</h1> */}
      <SignUpForm />
      <SignInForm/>
      {/* <button onClick={logGoogleUser}>Sign In with Google popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>
    */}
    </div>
  );
};
export default Authentication;
