import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { clearItemFromCart, addItemToCart,removeItemFromCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  // const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);
  //this functions shows the items lists with the possible delete, add, subtract options in the UI
  const dispatch=useDispatch();
  const cartItems= useSelector(selectCartItems)
  const clearItemHandler = () =>  dispatch(clearItemFromCart(cartItems,cartItem));
  const addItemHandler=()=>dispatch(addItemToCart(cartItems,cartItem));
  const removeItemHandler=()=>dispatch(removeItemFromCart(cartItems,cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {/* &#10096 special characror for greater than sign */}
        <div className="arrow" onClick={removeItemHandler}>&#10096;</div>
        <span className="value">{quantity}</span>
        {/* &#10095 special characror for less than sign */}
        {/* <div className="arrow" onClick={()=>addItemToCart(cartItem)}>&#10095;</div> */}
             <div className="arrow" onClick={addItemHandler}>&#10095;</div>

      </span>

      <span className="price">{price}</span>
      {/* &#10005 special charactor for deleting or x button*/}
      <div className="remove-buttton" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
