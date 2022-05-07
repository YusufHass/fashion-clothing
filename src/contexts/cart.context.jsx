import { createContext, useEffect, useState } from "react";
 
const addCartItem = (cartItems, productToAdd) => {
    //finding an existing product from the array
    //find the items contains product to add add
    const existingCartItem= cartItems.find((cartItem)=>
    cartItem.id==productToAdd.id);

    //if the item is found, then increment quantity
    if(existingCartItem){

        return cartItems.map((cartItem)=>
        cartItem.id==productToAdd.id?
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
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
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
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
