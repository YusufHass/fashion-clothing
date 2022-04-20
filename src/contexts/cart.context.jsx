import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find the items contains product to add add
  //if found, increment quantity
  //otherwise return new array with modified cartItems/new cart item


};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems))
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
