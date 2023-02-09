//this file is where the single store where we store all redux code.
// it is a combined place where all our redux happen.
//such as where state lives, where it recives actions, dispatch action 
//into to the reducers to update the state.

// we need to import three libraries from redux core

import {compose, createStore, appplyMiddleware} from 'redux';
import logger from 'redux-logger'
//reducer allow the store work by forming the state object 

import { rootReducer } from './root-reducer';

/**
 store  takes 3 arguments, first rootReducer- it helps generate store and
  facilitate actions passed to each reducers.
  
  *AND ALL STORE ONLY NEED IS ROOT REDUCER. 
  
  *Optional but we want to pass logger to see what the state looks like
before the action is dispatch, what the action is and how the state looks after the action. 
We need to create middleWare for logger to work

 */
// middleWare is a helper that runs before the action hits the reducer. So middleWare get the action first and shows what is happening with the action and all process
const middleWares= [logger]

//composedEnhancers does is passed every middleWares we have and compose them. 
//Example, we could have 'const middleWares= [logger, middleWare1,middleWare2,middleWare3]'

const composedEnhancers= compose(appplyMiddleware(...middleWares))

//now the store is created and we need to wrap this 'store' using 
//inside index.js using a provider
export const store= createStore(rootReducer, undefined, middleWares)