// import SHOP_DATA from "../../shops-data.json";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, Fragment } from "react";
// import ProductCard from "../../product-card/product-card.component";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import "./shop-styles.scss";
const Shop = () => {
  // the following categoriesMap recieves the categories from the categoreies conetext
  // const { categoriesMap } = useContext(CategoriesContext);

  //here is the redux that we use to manage the categories using useEffect that we use to fetch data from the db and put it inside
  // getCategoryMap
const dispatch= useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArray = await getCatagoriesAndDocuments();
      console.log("here it", categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getCategoryMap();
  }, []);
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
   
   
  //useEffect to fetch the data we stored in our 'categories' db

  //when we have a async/promise in our useEffect then we declare
  //the async inside the useEffect using another function instead of adding next to the useEffect as we do for another functions

  
   <Routes>
      <Route index element= {<CategoriesPreview/>}/>
      {/* <Route path=":category" element= {<Category/>}/> */}
      <Route path=":category" element= {<Category/>}/>

    </Routes>
  );
};

export default Shop;
