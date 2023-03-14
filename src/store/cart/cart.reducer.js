import { CART_ACTION_TYPES } from "./cart.types";


export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    // cartCount: 0,
    // cartTotal: 0,
  };
 


export const cartReducer = (state=CART_INITIAL_STATE, action) => {
    const { type, payload } = action;
  
    console.log('Library', state,type,payload)
    switch (type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
          ...state,
          cartItems: payload,
        };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN: return{
          ...state, isCartOpen: payload,
        }
      default:
        // throw new Error(`unhandled type ${type} is cartReducer`);
        return state
    }
  };
