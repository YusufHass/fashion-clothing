//this file is where the single store where we store all redux code.
// it is a combined place where all our redux happen.
//such as where state lives, where it recives actions, dispatch action 
//into to the reducers to update the state.

// we need to import three libraries from redux core



import {compose, createStore, applyMiddleware} from 'redux';

import {persistReducer, persistStore} from 'redux-persist'
//by default any web browser uses this local storage to store the data
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
//reducer allow the store work by forming the state object 

import { rootReducer } from './root-reducer';
import { loggerMiddleWare } from './middleware/logger';

const persistConfig= {
  //this tells everything start from the *root*
  key: 'root',
  //storage
  storage,
  //blacklist array tells what we dont need to store.
  //"user" reducer in the root-reducer.js for example dont need to be stored
  //as it holds user login information. 
  blacklist: ['user']
}
//this creats a persist reducer and will be used inside store by replacing
// the rootReducer arguments as rootReducer is already passed here 
const persistedReducer=persistReducer(persistConfig, rootReducer);

/**
 store  takes 3 arguments, first rootReducer- it helps generate store and
  facilitate actions passed to each reducers.
  
  *AND ALL STORE ONLY NEED IS ROOT REDUCER. 
  
  *Optional but we want to pass logger to see what the state looks like
before the action is dispatch, what the action is and how the state looks after the action. 
We need to create middleWare for logger to work

 */
//middleWare is a helper that runs before the action hits the reducer. So middleWare get the action first and shows what is happening with the action and all process
// const middleWares= [logger]
//we want the logger only to run/display the log or conslole.log when we are in 
//the 'developement' mode and we dont want anything to show when in the 'production' 
//therefor we we add [process.env.NODE_ENV!=='production' && logger].filter(Boolean)
//development vs production is the way we identity
//if we dont add .filter(Boolean) and we arent in development mode then it would display false without evaluating the 
// loggerMiddleWare
/*

example: (2==3) && {a: 'string' }//false
         [(2==3) && {a: 'string' }].filter(Boolean)// [ ]
          [(3==3) && {a: 'string' }].filter(Boolean)// [{a: string }]

*/
const middleWares= [process.env.NODE_ENV !=='production' && logger].filter(Boolean);

//composedEnhancers does is passed every middleWares we have and compose them. 
//Example, we could have 'const middleWares= [logger, middleWare1,middleWare2,middleWare3]'

const composedEnhancers= compose(applyMiddleware(...middleWares));

//now the store is created and we need to wrap this 'store' using 
//inside index.js using a provider
//all store needs is rootReducer and the rootReducer is the combination of all individual
// export const store= createStore(rootReducer, undefined, composedEnhancers)
export const store= createStore(persistedReducer, undefined, composedEnhancers)

//with modifying store, now we can persist our date. for this persistor
//data to work we need to update the index.js by wrapping the components
//using persistGate along with 'persistor' we exported here
export const persistor= persistStore(store)