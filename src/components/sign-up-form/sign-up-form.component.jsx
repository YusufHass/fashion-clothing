import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SIgnUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

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
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      //resets the form field empty once the form has submitted
      resetFormFields();
      console.log(user);
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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        {/* while 'name' is where we passed to the event, 'displayName, email, password' are we declare in the form object */}
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange:  handleChanges ,
            name: "displayName",
            value: displayName ,
          }}
        />
        {/* value represents anything we passes to the value of email etc.. if we passed string 'email' then we get email as the value */}
        {/* <FormInput
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
        ></FormInput> */}
        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
};
export default SIgnUpForm;
