//this is the root reducer and it will combine all different redducers/
//in other word we need one root reducer which combines all other reducers in order to use redux
// and this file helps us creating root reducer and will be the parent of all reducers
// combineReducers allows us combine all small reducers
import { combineReducers} from "redux";
import { userReducer } from './user/user-reducer'

/*
so the root reducer, passes all reducers we have as a key and value

rootReducers are pure-function which means that the out come of the function result 
will never impacted by the outside state amd the result is always the same and consisten. For example, 

const add = (x, y) => x + y;

add(2, 4); // 6  '6' is the only result and it's always true even if we run the code multiple times wich means it's pure


let x = 2;

const add = (y) => {
  x += y;
};

add(4); // x === 6 (the first time) here the '6' is the first time and we can not get 6
again since the 'x' value is incremented from 2 to 6 and if we want to run it again then 
the new result will be x===10 which means the result is influenced by the outside source
and that makes the 'function impure'

read here for more https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/

*/
export const rootReducer= combineReducers({
//key= user, value= reducer
    user:userReducer,

})




// import { combineReducers } from 'redux';

// import { userReducer } from './user/user-reducer';

// export const rootReducer = combineReducers({
//   user: userReducer,
// });













