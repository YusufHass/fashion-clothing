//custom context useContext
import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListner,
  signOutUser, createUserDocumentFromAuth
} from "../utils/firebase/firebase.utils";

//where we use as storage and call
// the createContext and the actual value that we want access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//then we have the provider and recive a childern and
//and returns .Povider. And every context build
// has a .provider and /provide is a  component that wraps any other compoents the value inside our context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  //now the UserProvider is allowing accessing its 'children'
  //to its useState and in this case the currentUser
  const value = { currentUser, setCurrentUser };
  //this makes the user signs out and makes empty since getAuth in the firebase remembers the last user even after sign out and displays in the cosole
  // signOutUser();

  useEffect(() => {
    //unsubscribe makes disble the onAuthStateChangedListner when the state is unmount
    const unsubscribe = onAuthStateChangedListner((user) => {
      // console.log(user)
      //if the user is new then create new user snapshot otherwise use the currentUser
      if (user) 
      {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//example of how the useContext wraps the child component
//and now the app becomes the child of provider
{
  /* <UserProvider>
    <app></app>
</UserProvider> */
}
