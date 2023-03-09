//having different separate function makes the application more clear and 
//maintenance easy. This component pulls the title and items from the categories and 
//able to put the data into the function. And it called inside the shop component
// to dipatch the function
export const selectCategoriesMap =(state)=>
//categoriesInReducer array is declared inside category.reducer.js
//categories is declared inside the root-Reducer.js and it calles the categoriesReducer
state.categories.categoriesInReducer.reduce((accumulator,
    category)=>{

      const{title, items}= category;
      accumulator[title.toLowerCase()]=items;
      return accumulator;
    },[]);