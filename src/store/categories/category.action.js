import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { creatAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
// we use this function inside the Shop.js with the useEffect.
 // this function doesnt dispatching it just creats an object and 
 //we need to dispatch it inside Shop.js
 
 //the 'categoriesArray' is represeting the 'payload' declared inside reducer.util.js as the creatAction function arguments
 //the USER_ACTION_TYPES is representing the 'type' declared inside reducer.util.js


// export const setCategories = (categoriesArray) =>
//   creatAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

  //modifying the code to fit the redux-thunk
//this function is for the fetch start and no *payload* is required
//and when the reducer sees this action then sets the isLoading: true nothing else 
  export const fetchCategoriesStart= ()=>
  creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

  //this is for success and the 'payload' value we passed to the reducer
  // is 'categoriesArray' and we already sets the isLoading to be false in the categorRreducer
  export const fetchCategoriesSucess= (categoriesArray)=>
  creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);
  //this is for failure and if failed then we need to pass 'error' as a 'payload'
  //message to the categoryReducer where we call the action type
  export const fetchCategoriesFailure= (error)=>
  creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, error);

//added 'Async' at the end so it will be know it's a thunk
//this function tells what to do at the start, success and fails
//the function will be called inside shop-component.js
  export const fetchCategoriesAsync= ()=>async (dispatch)=>{
    //this makes start fetching method from the above
    dispatch(fetchCategoriesStart());
    try {
      //categories is the table name and passing is optional just make us sure which
    // table is fetching
    //fetch the data from the db, then if succesful then sets the fetchCategoriesSucess
    //with the fetched data
      const categoriesArray = await getCatagoriesAndDocuments('categories');
      dispatch(fetchCategoriesSucess(categoriesArray));
    } catch (error){
      //if failed then set the resulted error to the fetchCategoriesFailure which will be st
      // as a payload in the categoryReducer 
      dispatch(fetchCategoriesFailure (error))

    }



  }
  
