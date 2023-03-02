//this file is where the single store where we store all redux code.
// it is a combined place where all our redux happen.
//such as where state lives, where it recives actions, dispatch action 
//into to the reducers to update the state.

// we need to import three libraries from redux core



import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
//reducer allow the store work by forming the state object 

import { rootReducer } from './root-reducer';



//how to write our own logger instead of using the redux-logger
// the following code customized code that is the written without using any library

// the formaat of the middleware is the same/
//we use curying which is a function which calls itself
 
//for example the followoing is the example of currying function
const curryFun= (a)=> (b, c)=> {
  return a+b-c
}
//here withA calls the function and passes 3 as its value. 
//Then it calculates as the following
const withA= curryFun(3);
withA(2,4);//3+2-4
const with10= curryFun(10);
with10(5,4);//10+5-4
console.log("Here's", with10(4,4))

//writing the loger middleware for the application
//chained curry function
//first function recieves the store object then it returns the next method
//the action follows
const loggerMiddleWare= (store)=>(next)=>(action)=>{
  //if no action then return next
  if(!action.type){
    return next(action)
  }
  //the following output is the same as the output we have in the redux-logger.
  //we can use either the redux-logger or the customized code we have here 
console.log('type', action.type)
console.log('payload', action.payload)
console.log('currentState', store.getState());
//the following code shows the next state
next (action);
console.log('next state', store.getState());
}

/**
 store  takes 3 arguments, first rootReducer- it helps generate store and
  facilitate actions passed to each reducers.
  
  *AND ALL STORE ONLY NEED IS ROOT REDUCER. 
  
  *Optional but we want to pass logger to see what the state looks like
before the action is dispatch, what the action is and how the state looks after the action. 
We need to create middleWare for logger to work

 */
// middleWare is a helper that runs before the action hits the reducer. So middleWare get the action first and shows what is happening with the action and all process
// const middleWares= [logger]
const middleWares= [loggerMiddleWare]


//composedEnhancers does is passed every middleWares we have and compose them. 
//Example, we could have 'const middleWares= [logger, middleWare1,middleWare2,middleWare3]'

const composedEnhancers= compose(applyMiddleware(...middleWares));

//now the store is created and we need to wrap this 'store' using 
//inside index.js using a provider
//all store needs is rootReducer and the rootReducer is the combination of all individual
export const store= createStore(rootReducer, undefined, composedEnhancers)
