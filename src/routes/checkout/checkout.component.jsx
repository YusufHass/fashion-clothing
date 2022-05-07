import { useContext } from 'react';
import './checkout.styles.scss'
import {CartContext} from '../../contexts/cart.context'

const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart}= useContext(CartContext)
  return (
    <div className="div">
      <h2>Iam the checkout page</h2>
      <div className="div">

          {
              cartItems.map((cartItem)=>{
                  const {id, name ,quantity}= cartItem;
                  return(
                  <div className="div" key={id}>
                      <h1>{name}</h1>
                      <span>{quantity}</span>
                      <br/>
                      <span onClick={()=>addItemToCart(cartItem)}>increment</span>
                      <br/>
                      <span onClick={()=>removeItemFromCart(cartItem)}>decrement</span>


                  </div>
                  )

              })
          }
      </div>
    </div>
  );
};
export default Checkout;
