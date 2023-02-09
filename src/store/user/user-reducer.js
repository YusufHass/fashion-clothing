//this will replace the userContext we had and 
//will be our user reducer. The code is from the userContext we user with the Context

export const USER_ACTION_TYPES= {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
  }
  const INITIAL_STATE= {
    currentUser: null,
  }
/*with useContext, we passed to useReducer hook an INITIAL_STATE and the userReducer
know the first state is the initial state. But since we dont 
use useReducer hook here we need to give the state intial value*/

 export const userReducer= (state=INITIAL_STATE, action)=>{
    console.log('dispatched');
    console.log(action);
  
    const {type, payload}= action;
  
    switch (type){
      case USER_ACTION_TYPES.SET_CURRENT_USER: 
        //this gives all previous state as they are then update the relevant value
        // needed or currentUser in this case
        // based ont he payload 
         return {...state, currentUser: payload
      }
      /* with useReducer hook, it passed userReducer as parameter and userReducer returns dispatch and
      dispatch fires action to only that specific userReducer we passed as argument and not to other Contexts such as cartReducer*/

    /*
     But in Redux, every single reducer receives action from redux and as a result by
    default wehenver we dont respond to an action such as the type nothing to do with userReducer as it could be cartReducer, 
    then it will return always the current state and that means it's change since it compares the memory refernce and check
    */
      default: return state;
    }
  }

