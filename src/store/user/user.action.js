

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

   



// import { USER_ACTION_TYPES } from './user.types';
// import { creatAction } from '../../utils/reducer/reducer.util';
// export const setCurrentUser = (user) =>
// creatAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);