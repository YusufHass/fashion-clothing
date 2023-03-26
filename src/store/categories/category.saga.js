
//side effects
import { takeLatest, all, call,put } from "redux-saga/effects";
import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase.utils";
//actions creater for success and fail
import { fetchCategoriesFailure,fetchCategoriesSucess } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

//added 'Async' at the end so it will be know it's a saga
//this * function generator* tells what to do at the start, success and fails
//this function is called in the onFetchCategories() function with the takeLatest side effects 
  export function* fetchCategoriesAsync(){
    try {
      //categories is the table name and passing is optional just make us sure which
      // table is fetching
      //fetch the data from the db, then if succesful then sets the fetchCategoriesSucess
      //while *yield* resembles await and makes pause and wait to finish, call-calls the function as a promise
      const categoriesArray = yield call(getCatagoriesAndDocuments,'categories');
      //instead of usign dispatch we use put since we use a *generatorFunction*
      yield put(fetchCategoriesSucess(categoriesArray));
      }
      catch (error){
        //if failed then set the resulted error to the fetchCategoriesFailure which will be st
        // as a payload in the categoryReducer 
        yield put(fetchCategoriesFailure(error))
  
      }
  }

  export function* onFetchCategories(){
    //give me the takeLatest takes two argument and returns the latest result
    //take means take an action and takeLatest means ignore all previous 
    //action and take the latest one
    //and the moment FETCH_CATEGORIES_START is started, then it calls the fetchCategoriesAsync which
    //declars above then shows the sucess or fails result
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
  }
  /*
  1. categoriesSaga is called in the root-saga.js,
  2. onFetchCategories is called in the categoriesSaga
  3. fetchCategoriesAsync is called in the onFetchCategories
  */
  export function* categoriesSaga (){
    //yeild all means that all code below *all* wont 
    //excute until this function finishes and means giving an instruction saying
    // "pause" until the on *onFetchCategories* finish and display the response
    yield all([call(onFetchCategories)]);
  }