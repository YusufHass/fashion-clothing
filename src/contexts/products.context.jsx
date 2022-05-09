import { createContext, useContext, useState, useEffect} from "react";
// import PRODUCTS from "../shops-data.json";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments, getCatagoriesAndDocuments} from "../utils/firebase/firebase.utils.jsx";
export const ProductContext= createContext({
//where we store products as an array
    products: [],
});
export const ProductProvider=({children})=>{
//default value is assigned as products 
    const [products, setProducts]= useState([]);
//this useEffect is used to write ourdata into the db and once we successfully added to the db then we can delete it since we need it once only
   
// useEffect(()=>{
//         addCollectionAndDocuments('cagteories', SHOP_DATA)

//     }, [])
    //and passed the products as a props 
    const value= {products}

    //useEffect to fetch the data we stored in our 'categories' db

    //when we have a async/promise in our useEffect then we declare 
    //the async inside the useEffect using another function instead of adding next to the useEffect as we do for another functions

    useEffect(()=>{
        const getCategoryMap= async ()=>{

            const categoryMap= await getCatagoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoryMap();

    }, []);

    return (

        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}