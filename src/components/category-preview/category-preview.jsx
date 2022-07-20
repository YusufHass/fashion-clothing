// this component creats the category for each title.
//example the first page diplays the 'hat' with 4 products and when it's
// clicked the title then it takes us to another page and diplays the rest of 'hats' similar products
import { Link } from "react-router-dom";
import ProductCard from "../../product-card/product-card.component";
import "./category-preview.styles.scss";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        {/* the following Link makes the the title a link and when we c
        click the title such as hats and jackets directs us to the another page of the page that shows mo
  more items of similar  category */}
        <Link className="category-preview-title" to={title}>{title.toUpperCase()}</Link>
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
