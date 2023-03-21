import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";
import './product-card.styles.scss'
// import { CartContext } from "../contexts/cart.context";
// import {useContext}  from 'react'
import { selectCartItems} from "../store/cart/cart.selector";
import { addItemToCart } from "../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  // const {addItemToCart}= useContext(CartContext)
  // const addProductToCart=()=>addItemToCart(products)
 const dispatch= useDispatch();
  const cartItems= useSelector(selectCartItems);
  const addProductToCart=()=>dispatch(addItemToCart(cartItems,products))
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> ${price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProductCard;
