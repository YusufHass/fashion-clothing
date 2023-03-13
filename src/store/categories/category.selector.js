// Memoization is a process which you cache the 
//previous value in the memory and and when we run a program next time then first it checks
//from cache memory and if the out put result is saved inside the cache then it displays from cache array otherwise it calculats like new programs/
//saving in the cache makes the computational speed faster and saves calculating time.

//example: const addNum= (a,b)=> {
// return a+b
//addNum(3,4); always return 7 and thus cache doesnt need to calucalte everytime 
//}


//here the createSelector is a reselect library and
//used for memoization for useSelect 

import { createSelector } from "reselect";
//categories is declared inside the root-Reducer.js and it calles the categoriesReducer
export const selectCategoryReducer= (state)=>{
  console.log("selector 1 fired")
  return state.categories;
}

export const selectCategories= createSelector(
  //this code will run first time and then the output will be save in the cache
  //the only time that this code will run again be when the above **selectCategoryReducer** or 
  //categoriesReducer in the rootReducer.js changess.
  //otherwise it wont run the code again and recalculating the program because of memoization. Instead it 
  // will display the result by pulling from the cache it saved
  [selectCategoryReducer],
  (categoriesSlice)=>{
    console.log("selector 2 fired")
    return categoriesSlice.categoriesInReducer}
);

//having different separate function makes the application more clear and 
//maintenance easy. This component pulls the title and items from the categories and 
//able to put the data into the function. And it called inside the shop component
// to dipatch the function

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories)=> {
    console.log("selector 3 fired")
  //here it says as long as the *categoriesInReducer*  array from the above *selectCategories* doesnt change, then
  //do not run the following code. Otherwise if it's change then run. Always run the
  //first time and saves it in the cache and then start checking when it runs a second time
   return categories.reduce((accumulator,
    category)=>{

      const{title, items}= category;
      accumulator[title.toLowerCase()]=items;
      return accumulator;
    },[])}
);