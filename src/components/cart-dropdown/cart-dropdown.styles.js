import styled from "styled-components";
//Ctrl+shift+A is the shortcut to add the mulit line comment
/* the following styled style is used to style the cart component
the style is applied according to the consequences the style apearance.

for example the CartDorpDown is applied before the CartItemStyle is applied.

If we want for example the empty item container apperance different
 whenever we the container is empty then we can nested the cartDropDownStyle as a child 
 of EmptyMessageStyle then we can add styling the way we want to override the previous style

 export const EmptyMessageStyle= styled.span`
   font-size: 18px;
   margin: 50px auto;

   {
    $CartDropDownStyle {

        background-color: red;

    }
   }
`


*/

/* 
in tne following button, I used the custom made button instead of the 
css button generated so I imported the custom made button from the button component

*/
import {
  BaseButtonContainer,
  InvertedButton,
  GoogleSignIn,
} from "../../button/button.styles";

export const CartDropDownStyle = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  /* the following *button* style decides the button style we used 
  inside theCartDropDownStyle. If we want the custom made style we created
  previously inside  Button componenet  then the we need to import the style here in order to use the button
   
    button {
   margin-top: auto;
  color: yellow;
     }
     */
  ${BaseButtonContainer},
  ${InvertedButton}, 
   ${GoogleSignIn} {
    margin-top: auto;
    color: yellow;

   }
`;

export const CartItemsStyle = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  //overflow auto adds vertical scroll while the container 
  //is full and the scroll adds both vertical and hortizontal
   overflow: auto;
  //  overflow: scroll;

`;

export const EmptyMessageStyle = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

// .cart-dropdown-container {
//   position: absolute;
//   width: 260px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }
// }
