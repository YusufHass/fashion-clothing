

 import { USER_ACTION_TYPES } from "./user.types";
 import { creatAction } from "../../utils/reducer/reducer.util";
/*
this function is copied from the userContext and making it separate files helps to reuse it in another place

setCurrentUser is a function and
recieves the 'user' and instead of dispatching it here 
it will just create an action and will return back the action object

the 'type' is USER_ACTION_TYPES and the value is the 'user' from the payload

*/


 // we use this function inside the App.js with the useEffect.
 // this function doesnt dispatching it just creats an object and 
 //we need to dispatch it inside App.js
 
 //the 'user' is represeting the 'payload' declared inside reducer.util.js as creatAction function arguments
 //the USER_ACTION_TYPES is representing the 'type' declared inside reducer.util.js as creatAction function arguments

 
export const setCurrentUser = (user)=> 
     creatAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
 
 
    // console.log("user is ", user)
    // console.log("action is ", USER_ACTION_TYPES)

export const checkUserSession= ()=>
//we can pass single argument oppose to the decleration of the functon argument
//since the second argument is unimportant to the *creatAction* function and we dont use it and 
//it default makes undefine or gives it null
creatAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
export const googgleSignInStart=()=>
creatAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
//we can pass the second argument as a an object if we need to pass more than what we declare for and in *creatAction*
//we declared it to take to parameters but wented to pass three and the object with a comman counts as 1 
//argument no matter how many arguments the object has...
export const emailSignInStart = (email, password)=> {
    return creatAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email,password})
}

//displays the user information if it's a success 
export const signInSuccess= (user)=>creatAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

//dispays the user failed information and displays the error message
export const signInFailed= (error)=>creatAction(USER_ACTION_TYPES.SIGN_IN_FAILED,error);
//the follwing action creators are for the sign-up
export const signUpStart=(email,password,displayName)=>creatAction(USER_ACTION_TYPES.SIGN_UP_START,{email,password,displayName})

export const signUpSuccess=(user, additionalDetails)=>creatAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails})

export const signUpFailed= (error)=> creatAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);


//user actions for the sign-out

export const signOutStart=()=>creatAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutSuccess=()=>creatAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
export const signOutFailed=(error)=>creatAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error);
