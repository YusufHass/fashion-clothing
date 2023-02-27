//separating each small peice to a separate file makes the code readability easy
/**
 this makes the user action in root level folder and we can use it in
  different files by importing to the files we need to this action use
 */

export const USER_ACTION_TYPES= {
  // '/user' gives aditional information that which section of store this action governed
  //and in this case this applies for the 'user store'
    SET_CURRENT_USER: 'user/SET_CURRENT_USER',
  }