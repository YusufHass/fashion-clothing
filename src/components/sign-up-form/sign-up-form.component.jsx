import { useState, useContext } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import {
  auth,
  createUserDocumentFromAuth,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import './sign-up-form.styles.scss'
import Button from "../../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
// import { UserContext } from "../../contexts/user.context";
const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SIgnUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds);
  const { displayName, email, password, confirmPassword } = formFields;
  // console.log(formFields);


  // const {setCurrentUser}= useContext(UserContext);

 const dispatch= useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFeilds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password doesnt match");
      return;
    }
    //otherwise if they match
    try {
      // const { user } = await createUserWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // );
      // //sets the user into the setCurrentUser state and shows the updated value in the currentUser of navigation component
      // // setCurrentUser(user);
      // await createUserDocumentFromAuth(user, { displayName });

      //replaced with the redux-sage
      dispatch(signUpStart(email, password, displayName));

      //resets the form field empty once the form has submitted
      resetFormFields();
      // console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user email, already in use");
      }
      console.log("User creation error", error);
    }
  };
  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* while 'name' is where we passed to the event, 'displayName, email, password' are we declare in the form object */}
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChanges}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChanges}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <Button type="submit">Sign Up </Button>
      </form>
    </div>
  );
};
export default SIgnUpForm;
