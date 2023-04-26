//separating each small peice to a separate file makes the code readability easy
/**
 this makes the user action in root level folder and we can use it in
  different files by importing to the files we need to this action use
 */

export const USER_ACTION_TYPES= {
  // '/user' gives aditional information that which section of store this action governed
  //and in this case this applies for the 'user store'
    SET_CURRENT_USER: 'user/SET_CURRENT_USER',
    //the following additional actions are added because of the redux-saga converting

      CHECK_USER_SESSION:'user/CHECK_USER_SESSION',
      GOOGLE_SIGN_IN_START:'user/GOOGLE_SIGN_IN_START',
      EMAIL_SIGN_IN_START:'user/EMAIL_SIGN_IN_START',
      SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
      SIGN_IN_FAILED:'user/SIGN_IN_FAILED',

      // the following action types are used for the sign-up documents
      SIGN_UP_START: 'user/SIGN_UP_START',
      SIGN_UP_SUCCESS: 'user/SIGN_UP_SUCCESS',
      SIGN_UP_FAILED: 'user/SIGN_UP_FAILED',


      //the following using for the sign-out
      SIGN_OUT_START:'user/SIGN_OUT_START',
      SIGN_OUT_SUCCESS:'user/SIGN_OUT_SUCCESS',
      SIGN_OUT_FAILED:'user/SIGN_OUT_FAILED'



  }