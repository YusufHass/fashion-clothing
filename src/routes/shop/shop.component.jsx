import SHOP_DATA from "../../shop-data.json";
import { ProductContext } from "../../contexts/products.context";
import { useContext } from "react";
const Shop = () => {
  const {products}= useContext(ProductContext);
  return (
    <div className="div">
      {products.map(({name, id}) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
