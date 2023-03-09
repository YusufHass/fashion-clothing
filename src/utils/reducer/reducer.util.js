//this helper function helps avoiding re-writing type and payload
//in the userReducer function inside user-reducer.js as well as categoriesReducer inside
// categoriesReducer.js. The function will be imported in the CartReducer,
//UserReducer, CategoryReducer components and we wont require to write the 
//'type' and 'payload' everytime we want to use them
//while the payload is storing the data, the type identifies the action type it could be
//for the user or the categories

export const creatAction=(type, payload)=>({type, payload})