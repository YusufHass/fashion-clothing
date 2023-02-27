// // //custom context useContext
// // import { useContext, useReducer } from "react";
// // import { createContext, useEffect, useState } from "react";
// // import {
// //   onAuthStateChangedListner,
// //   signOutUser, createUserDocumentFromAuth
// // } from "../utils/firebase/firebase.utils";
// // import {creatAction} from '../utils/reducer/reducer.util'

// // import { userReducer,INITIAL_STATE } from "../store/user/user-reducer";
// // import { USER_ACTION_TYPES } from "../store/user/user.types";
// // //where we use as storage and call
// // // the createContext and the actual value that we want access
// // export const UserContext = createContext({
// //   currentUser: null,
// //   // setCurrentUser: () => null,
// // });

// // //In the following code, we will see how to useReducers. useReducers 
// // // is used for the same reason as the useContext and both manages the
// // // state, however, the the way they implementing is different.
// // //  While useContext uses useState and useEffect to update the state,
// // //  useReducer updates the state based on the state and action
// // // Look the following code how the code is switched to useReducer from useContextand 
// // // for to provide the same functionality

// // // export const USER_ACTION_TYPES= {
// // //   SET_CURRENT_USER: 'SET_CURRENT_USER'
// // // }
// // // const userReducer= (state, action)=>{
// // //   console.log('dispatched');
// // //   console.log(action);

// // //   const {type, payload}= action;

// // //   switch (type){

// // //     // //in this case we have only one state that we are updating thus 
// // //     // we have only one switch statement and if the state is 
// // //     // not updating error will throw

// // //     // if we have increment number for example, we may write 
// // //     //             case 'increment':
// // //     //             return {
// // //     //               value: state.value+1,
// // //     //             }

// // //     // case 'SET_CURRENT_USER':
// // //     case USER_ACTION_TYPES.SET_CURRENT_USER: 
// // //       //this gives all previous state as they are then update the relevant value
// // //       // needed or currentUser in this case
// // //       // based ont he payload 
// // //        return {...state,

// // //       currentUser: payload
// // //     }
// // //     default: throw new Error (`unhandled type ${type} in userReducer`);
// // //   }
// // // }
// // // const INITIAL_STATE= {
// // //   currentUser: null,
// // // }
// // //then we have the provider and recive a childern and
// // //and returns .Povider. And every context build
// // // has a .provider and /provide is a  component that wraps any other compoents the value inside our context
// // export const UserProvider = ({ children }) => {
// //   // const [currentUser, setCurrentUser] = useState(null);
// //  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
// //  console.log (currentUser);

// //  const setCurrentUser= (user)=>{
// //   dispatch(creatAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
// //  }

// //   //now the UserProvider is allowing accessing its 'children'
// //   //to its useState and in this case the currentUser
// //   //this makes the user signs out and makes empty since getAuth in the firebase remembers the last user even after sign out and displays in the cosole
// //   // signOutUser();

// //   useEffect(() => {
// //     //unsubscribe makes disble the onAuthStateChangedListner when the state is unmount
// //     const unsubscribe = onAuthStateChangedListner((user) => {
// //       // console.log(user)
// //       //if the user is new then create new user snapshot otherwise use the currentUser
// //       if (user) 
// //       {
// //         createUserDocumentFromAuth(user);
// //       }

// //       setCurrentUser(user);
// //     });
// //     return unsubscribe;
// //   }, []);

// //   const value = { currentUser};

// //   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// // };

// // //example of how the useContext wraps the child component
// // //and now the app becomes the child of provider
// // {
// //   /* <UserProvider>
// //     <app></app>
// // </UserProvider> */
// // }



// import { createContext, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { setCurrentUser } from '../store/user/user.action';
// import { selectCurrentUser } from '../store/user/user.selector';

// import {
//     onAuthStateChangedListner,
//      createUserDocumentFromAuth
//   } from "../utils/firebase/firebase.utils";

// export const UserContext = createContext({
//   currentUser: "yesuf",
// });

// export const UserProvider = ({ children }) => {
//   const dispatch = useDispatch();
//   const currentUser = useSelector(selectCurrentUser);

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChangedListner((user) => {
//   //     if (user) {
//   //       createUserDocumentFromAuth(user);
//   //     }
//   //     dispatch(setCurrentUser(user));
//   //   });

//   //   return unsubscribe;
//   // }, []);

//   const value = {
//     currentUser,
//   };
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };