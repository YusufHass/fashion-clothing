import { Fragment, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  //useParms used to generate the path 'category' in the shops.component
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  //since categoriesMap use async data generation the we have to
  //wait untile the async data properly generated and populated to products. Otherwise the product would be empty since it runs sync and would couse error on the program
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    // unless the category and categoriesMap have changed, the useEffect will not updated
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h1 className="category-title">{category.toUpperCase()}</h1>
      <div className="category-container">
        {
          //the following && makes the safe guird for the program work
          // it says unless the products has value and defined then dont diplay anything/
          products &&
            products.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))
        }
      </div>
    </Fragment>
  );
};

export default Category;
