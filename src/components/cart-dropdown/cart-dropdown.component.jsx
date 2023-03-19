import {CartDropDownStyle,CartItemsStyle, EmptyMessageStyle} from './cart-dropdown.styles'
import Button from '../../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext} from 'react'
// import {CartContext} from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
import { selectCartCount} from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'
const CardDropDown=()=>{
//using useNavigate component to navigate/path without using the route
    const navigate= useNavigate();

    const goToCheckoutHandler= ()=>{

        navigate('/checkout')
    }
    // const {cartItems}= useContext(CartContext)
    const cartItems= useSelector(selectCartCount)
    return(
        <CartDropDownStyle>
            <CartItemsStyle>
                {cartItems.length ? (
                cartItems.map((item)=>(
                    <CartItem key={item.id} cartItem={item}/>
                ))): (<EmptyMessageStyle>Your cart is empty</EmptyMessageStyle>)
                
                }
            </CartItemsStyle>
            <Button onClick= {goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropDownStyle>
    )
}

export default CardDropDown;