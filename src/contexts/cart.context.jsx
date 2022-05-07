import { createContext, useEffect, useState } from "react";
 
const addCartItem = (cartItems, productToAdd) => {
    //finding an existing product from the array
    //find the items contains product to add add
    const existingCartItem= cartItems.find((cartItem)=>
    cartItem.id===productToAdd.id);

    //if the item is found, then increment quantity
    if(existingCartItem){

        return cartItems.map((cartItem)=>
        cartItem.id===productToAdd.id?
        {
            ...cartItem, quantity: cartItem.quantity+1
        }
        :cartItem
        )
    }
   // return new array with modified cartItems/new cart item
  //if this cart doesnt have an existing items with the
  //same id as productToAdd then sure that product is new product
  //when all items dont match with the product, add the the item into productToAdd cart
  return [...cartItems, {...productToAdd, quantity:1}];
};

const removeCartItem=(cartItems, cartItemToRemove)=> {
//find the cart item to remove
const existingCartItem= cartItems.find((cartItem)=>
    cartItem.id===cartItemToRemove.id);


// check if quantity is equal to 1, if it is remove the item

if(existingCartItem.quantity===1){
  return cartItems.filter(cartItem=> cartItem.id!==cartItemToRemove.id);
}

// otherwise return back cartItems with matching cart item with reduced quantity
return cartItems.map((cartItem)=>
        cartItem.id===cartItemToRemove.id?
        {
            ...cartItem, quantity: cartItem.quantity-1
        }
        :cartItem
        )

}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  cartCount:0,
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount]= useState(0);

  useEffect(()=>{
    const newCartCount= cartItems.reduce((total, cartItem)=> total+ cartItem.quantity, 0 )
    setCartCount(newCartCount)

  }, [cartItems])
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems,cartItemToRemove));
  };
  const value = { isCartOpen, setIsCartOpen, removeItemFromCart, addItemToCart, cartItems, cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
