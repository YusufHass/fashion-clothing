//this is the root reducer and it will combine all different redducers/
//in other word we need one root reducer which combines all other reducers in order to use redux
// and this file helps us creating root reducer and will be the parent of all reducers
// combineReducers allows us combine all reducers
import { combineReducers} from "redux";
import { userReducer } from './user/user-reducer'

/*
so the root reducer, passes all reducers we have as a key and value
*/
export  const rootReducer= combineReducers({
//key= user, value= reducer
    user: userReducer


    
})