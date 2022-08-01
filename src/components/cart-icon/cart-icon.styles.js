import styled from 'styled-components'

import { ReactComponent as ShoppingIconSvg } from "../../asset/shopping-bag.svg";

/* 
The svg icon we used as the shopping icon can be implemented using two ways
1. adding svg inside CartIconContainer 
2. by creating a separaate componnent once we imported the svg to this component.
I used the second metheod

*/
 export const CartIconContainer= styled.div `
 width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    // svg {
    //   width: 24px;
    //   height: 24px;


    // }
 `
 export const ShoppingIcon= styled(ShoppingIconSvg)`
      width: 24px;
      height: 24px;
 `


 export const ItemCount= styled.span `
 position: absolute;
 font-size: 10px;
 font-weight: bold;
 bottom: 12px;
 `
 
 /* 
 .cart-icon-container {
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
    .shopping-icon {
      width: 24px;
      height: 24px;
    }
  
    .item-count {
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
    }
  }
   */