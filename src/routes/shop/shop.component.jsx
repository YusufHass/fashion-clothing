import SHOP_DATA from "../../shops-data.json";
import { CategoriesContext } from "../../contexts/categories.context";
import { Fragment, useContext } from "react";
import ProductCard from "../../product-card/product-card.component";
import "./shop-styles.scss";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) =>(
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="product-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} products={product} />
              // <div key={id}>
              //   <h1>{name}</h1>
              // </div>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
