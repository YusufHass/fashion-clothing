import { creatAction } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.types";

// the following helper function is used to increment the number of item in the cart
const addCartItem = (cartItems, productToAdd) => {
    //finding an existing product from the array
    //find the items contains product to add add
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    //if the item is found, then increment quantity
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    }
    // return new array with modified cartItems/new cart item
    //if this cart doesnt have an existing items with the
    //same id as productToAdd then sure that product is new product
    //when all items dont match with the product, add the the item into productToAdd cart
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  //the following helper function is used to decrement the item from the cart list
  const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove the item
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // otherwise return back carPtItems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem
    );
  };
 
 //the following helper function is used to remove the item from the list using the 'x' button
 const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  };

//this function is for the cart open and recieves boolean.
//The action types CART_ACTION_TYPES.SET_IS_CART_OPEN value is set
//inside cartReducer and returning a payload boolean type in the cartReducer  
export const setIsCartOpen= (boolean)=>creatAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean);
  


// a function call to add or increment in the cart
  export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return creatAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  // a function to remove an item from the cart
  //this is an action creater for 
 export  const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return creatAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  // function call to clear from the list
  export const clearItemFromCart = (cartItems,cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return creatAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };

