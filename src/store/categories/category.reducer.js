import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
categoriesMap: {},
};

// so we assing action= {} so if no action is passed and ,
// reducer is run then empty object will be something to call
//
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    
  const { type, payload} = action;
//the payload is the data that we fetch and stores in the categoriesMap which is
// used inside the rootReducer. If we dont give the same name 'categoriesMap' in the 
 // in the rootReducer then the value in the rootReducer would be empty
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP: return {...state, categoriesMap: payload

    }
    default: return state;
  }
};
