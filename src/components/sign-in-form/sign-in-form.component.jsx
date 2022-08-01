import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import "./sign-in-form.styles.scss";
import Button, {BUTTON_TYPES_CLASSES} from "../../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFeilds = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds);
  const { email, password } = formFields;
  // console.log(formFields);

  //resets the form back to empty once we filled and submit the form
  const resetFormFields = () => {
    setFormFields(defaultFormFeilds);
  };
//setCurrentUser is distructured from the UserContext component
  // const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //try sign in using email and password
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(user);
      //set the user value what ever the respond is
      // setCurrentUser(user);
      //resets the form field empty once the form has submitted
      resetFormFields();
      // console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password is entered");
          break;
        case "auth/user-not-found":
          alert("No user associated to this email ");
          break;
        case "auth/too-many-requests":
          alert(
            "Failed login for many attempts. You can immediately restore it by resetting your password or you can try again later"
          );
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);

     await signInWithGooglePopup();
  };
  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* while 'name' is where we passed to the event, 'displayName, email, password' are we declare in the form object */}

        {/* value represents anything we passes to the value of email etc.. if we passed string 'email' then we get email as the value */}
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChanges}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChanges}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign In </Button>
          {/* by default the button is always associated with a 
          'submit' so we need to give another name to a button we used and in this case we gave 'button' as a type*/}
          <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
