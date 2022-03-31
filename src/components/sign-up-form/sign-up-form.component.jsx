import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
  console.log(formFields)

  const handleSubmit= async (event)=>{

    event.preventDefault();
  }
  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value})
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        {/* while 'name' is where we passed to the event, 'displayName, email, password' are we declare in the form object */}
        <input
          type="text"
          required
          onChange={handleChanges}
          name="displayName"
          value={displayName}
        />
        {/* value represents anything we passes to the value of email etc.. if we passed string 'email' then we get email as the value */}
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChanges}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChanges}
          name="password"
          value={password}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChanges}
          name="confirmPassword"
          value={confirmPassword}
        ></input>
        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
};
export default SIgnUpForm;
