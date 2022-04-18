import SHOP_DATA from "../../shop-data.json";
import { ProductContext } from "../../contexts/products.context";
import { useContext } from "react";
import ProductCard from "../../product-card/product-card.component";
import './shop-styles.scss'
const Shop = () => {
  const {products}= useContext(ProductContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} products={product}/>
        // <div key={id}>
        //   <h1>{name}</h1>
        // </div>
      ))}
    </div>
  );
};

export default Shop;
