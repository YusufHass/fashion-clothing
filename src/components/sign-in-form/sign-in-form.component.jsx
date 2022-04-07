import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import "./sign-in-form.styles.scss";
import Button from "../../button/button.component";

const defaultFormFeilds = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds);
  const { email, password } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFeilds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //otherwise if they match
    try {
      //resets the form field empty once the form has submitted
      resetFormFields();
      // console.log(user);
    } catch (error) {}
  };

  const signInWithGoogle = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);

    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
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
          <Button buttonType="google" onClick={signInWithGoogle}>Google</Button>
          </div> 
           </form>
    </div>
  );
};
export default SignInForm;
