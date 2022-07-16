// this component creats the category for each title.
//example the first page diplays the 'hat' with 4 products and when it cl
// clicked then it diplays the rest of 'hats' similar products

import { keyboard } from "@testing-library/user-event/dist/keyboard";
import ProductCard from "../../product-card/product-card.component";
import "./category-preview.styles.scss";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        {/* the following span makes the the title makes a link only on the title */}
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
      {/* // if the index is such as the first item index 0, second index 1 etc.. or the items are less than 4 then display them
    // otherwis they are thrown away */}
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
