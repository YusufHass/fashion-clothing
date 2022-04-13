import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContext= createContext({
//where we store products as an array
    products: [],
});
export const ProductProvider=({children})=>{
//default value is assigned as products 
    const [products, setProducts]= useState(PRODUCTS);
//and passed the products as a props 
    const value= {products}

    return (

        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}