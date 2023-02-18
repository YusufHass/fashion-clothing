//this will replace the userContext we had and 
//will be our user reducer. The code is from the userContext we user with the Context

import { USER_ACTION_TYPES } from "./user.types";

  export const INITIAL_STATE= {
    currentUser: null,
  }
/*with useContext, we passed to useReducer hook an INITIAL_STATE and the userReducer
know the first state is the initial state. But since we dont 
use useReducer hook here we need to give the state intial value*/

 export const userReducer= (state=INITIAL_STATE, action= {})=>{
    // console.log('dispatched');
    // console.log(action);
  
    const {type, payload}= action;


  
// //in this case we have only one state that we are updating thus 
    // we have only one switch statement and if the state is 
    // not updating error will throw

    // if we have increment number for example, we may write 
    //             case 'increment':
    //             return {
    //               value: state.value+1,
    //             }

    // case 'SET_CURRENT_USER':

    switch (type){
      case USER_ACTION_TYPES.SET_CURRENT_USER: 
        //this gives all previous state as they are then update the relevant value
        // needed or currentUser in this case
        // based ont he payload 
         return {...state, currentUser:payload
      };
      /* with useReducer hook, it passed userReducer as parameter and userReducer returns dispatch and
      dispatch fires action to only that specific userReducer we passed as argument and not to other Contexts such as cartReducer*/

    /*
     But in Redux, every single reducer receives action from redux and as a result by
    default and while that specific action reducer is updated with the new state another reducers return 
    the state that is unchanged since the action doesnt affect */
      default: return state;
    }
  }




// import {USER_ACTION_TYPES} from './user.types';


// export const USER_INITIAL_STATE = {
//   currentUser: null,
// };

// export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };