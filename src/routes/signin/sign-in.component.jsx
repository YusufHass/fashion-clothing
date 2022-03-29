import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);

    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user)
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google popup</button>
      <button onClick={logGoogleRedirect}>Sign In with Google Redirect</button>
    </div>
  );
};
export default SignIn;
