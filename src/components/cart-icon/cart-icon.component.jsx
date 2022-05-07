import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CardIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount}= useContext(CartContext)
  const toggleIsCartOpen=()=>{
    setIsCartOpen(!isCartOpen)

  }
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen} >
      <ShoppingIcon className="shopping-icon"  />
      <span className=" item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
