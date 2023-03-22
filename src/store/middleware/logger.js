

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
export const loggerMiddleWare= (store)=>(next)=>(action)=>{
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