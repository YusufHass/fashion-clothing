
//action types for the categores
export const CATEGORIES_ACTION_TYPES= {
    //here using '/category' giving additional info that which section of store this applies
    //which in this case 'category section' and it gives clarify and helps especially when we have 
    //big application with many different stores
    // SET_CATEGORIES: 'category/SET_CATEGORIES',

    //updating the action types to implement the redux-thunk
//starts the action
    FETCH_CATEGORIES_START: 'category/FETCH_CATEGORIES_START',
    //displays the success means it sets the result
    FETCH_CATEGORIES_SUCCESS:'category/FETCH_CATEGORIES_SUCCESS',
    //displays the failed
    FETCH_CATEGORIES_FAILED: 'category/FETCH_CATEGORIES_FAILED'
}