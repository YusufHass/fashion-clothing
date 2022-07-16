// import SHOP_DATA from "../../shops-data.json";
// import { CategoriesContext } from "../../contexts/categories.context";
// import { useContext, Fragment } from "react";
// import ProductCard from "../../product-card/product-card.component";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop-styles.scss";
const Shop = () => {
  // the following categoriesMap recieves the categories from the categoreies conetext
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
    

    // <div className="shop-containers">
    //   {/* the following objects.key filters the four items from categoriesMap recieved above then displays */}
    //       {Object.keys(categoriesMap).map((title) =>{
    //         const products= categoriesMap[title];
    //         return (<CategoryPreview key={title} title={title} products={products}/>)
    //           // <div key={id}>
    //             // <h1>{name}</h1>
    //           // </div>
    //       })}
    // </div>
// the following routes are sub-route of the shop path inside the App.js
//for example shop/hat...shop/jackets etc....
    <Routes>
      <Route index element= {<CategoriesPreview/>}/>
      <Route path=":category" element= {<Category/>}/>
    </Routes>
  );
};

export default Shop;
