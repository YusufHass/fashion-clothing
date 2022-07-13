import SHOP_DATA from "../../shops-data.json";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";

import "./shop-styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    
    <div className="shop-container">
          {Object.keys(categoriesMap).map((title) =>{
            const products= categoriesMap[title];
            return (<CategoryPreview key={title} title={title} products={products}/>)
              // <div key={id}>
                // <h1>{name}</h1>
              // </div>
          })}
    </div>
  );
};

export default Shop;
