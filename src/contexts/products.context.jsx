import { createContext, useContext, useState, useEffect} from "react";
// import PRODUCTS from "../shops-data.json";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
export const ProductContext= createContext({
//where we store products as an array
    products: [],
});
export const ProductProvider=({children})=>{
//default value is assigned as products 
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        addCollectionAndDocuments('catagories', SHOP_DATA)

    }, [])
    //and passed the products as a props 
    const value= {products}

    return (

        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}