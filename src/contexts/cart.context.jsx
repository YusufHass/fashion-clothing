import { createContext, useEffect, useState } from "react";
 // the following helper function is used to increment the number of item in the cart
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
//the following helper function is used to decrement the item from the cart list
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
//the following helper function is used to remove the item from the list using the 'x' button
const clearCartItem=(cartItems, cartItemToClear)=>{
  return cartItems.filter(cartItem=> cartItem.id!==cartItemToClear.id);

}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  clearItemFromCart:()=>{},
  cartCount:0,
  cartTotal:0,
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount]= useState(0);
  const [cartTotal, setCartTotal]= useState(0);
//useEffect for counting 
  useEffect(()=>{
    const newCartCount= cartItems.reduce((total, cartItem)=> total+ cartItem.quantity, 0 )
    setCartCount(newCartCount)

  }, [cartItems])
  //useEffect for the total update and tracking it
  useEffect(()=>{
    const newCartTotal= cartItems.reduce((total, cartItem)=> total+ cartItem.quantity *cartItem.price, 0 )
    setCartTotal(newCartTotal)

  }, [cartItems])

  // a function call to add or increment in the cart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd));
  };
  // a function call to remove an item from the cart
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems,cartItemToRemove));
  };
  // function call to clear from the list
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems,cartItemToClear));
  };
  const value = { isCartOpen,clearItemFromCart ,setIsCartOpen, removeItemFromCart, addItemToCart, cartItems, cartTotal, cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
