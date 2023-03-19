import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles.js";
// import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import { useDispatch, useSelector } from "react-redux";


const CartIcon = () => {
  const dispatch= useDispatch();
 const cartCount=useSelector(selectCartCount)
 const isCartOpen= useSelector(selectIsCartOpen)
  // const { isCartOpen, setIsCartOpen, cartCount}= useContext(CartContext)
  // const toggleIsCartOpen=()=>{
  //  setIsCartOpen(!isCartOpen)}
  // const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen)
  const toggleIsCartOpen=()=>dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"  />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
