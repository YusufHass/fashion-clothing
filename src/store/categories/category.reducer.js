import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
// categories: {}, having an object cause error and find out why we need to use an array instead
categoriesInReducer: [],
//follwing codes are added for redux-thunk usage 
//isLoading tracks wether/not the reducer is in the loading state with the data is's hold
//isLoading is false by default until something is triggered and becomes true
isLoading: false,
//as we are fetching async now, reducer should tell if error is occured or nor
error: null

};

// so we assing action= {} so if no action is passed and ,
// reducer is run then empty object will be something to call
//
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    
  const { type, payload} = action;
  console.log("libray", payload)
//the payload is the data that we fetch and stores in the categoriesInReducer which is
// used inside the rootReducer. If we dont give the same name 'categoriesInReducer' in the 
//in the rootReducer then the value in the rootReducer would be empty

  switch (type) {
    //modifying for redux-thunk
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START: return {...state, isLoading:true }
    //if success then set the value and makas isLoading=false
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS: return {...state, categoriesInReducer: payload, isLoading:false }
    //if fails then return the state, and error is the payload we'll pass and isLoading is false
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED: return {...state, error: payload, isLoading:false }

    //in redux, default must always return the state, otherwise error occurs
    default: return state;
  }
};
