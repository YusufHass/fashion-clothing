import { creatAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// we use this function inside the Shop.js with the useEffect.
 // this function doesnt dispatching it just creats an object and 
 //we need to dispatch it inside Shop.js
 
 //the 'categoriesArray' is represeting the 'payload' declared inside reducer.util.js as the creatAction function arguments
 //the USER_ACTION_TYPES is representing the 'type' declared inside reducer.util.js


export const setCategories = (categoriesArray) =>
  creatAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
