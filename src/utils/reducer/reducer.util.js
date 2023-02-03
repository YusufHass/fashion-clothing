//this helper function helps avoiding re-writing type and payload
//in the useReducer functions. The function will be imported in the CartReducer,
//UserReducer, CategoryReducer components and we wont require to write the 
//'type' and 'payload' everytime we want to use them

export const creatAction=(type, payload)=>({type, payload})