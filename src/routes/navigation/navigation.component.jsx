import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles";
import { ReactComponent as FashionClothingLogo } from "../../asset/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Shop from "../shop/shop.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  //currentUser is distructured from the UserContext component which
  //the value is set inside sign-in component using setCurrentUser
  const { currentUser } = useContext(UserContext);
  const {isCartOpen}= useContext(CartContext)
  // console.log(currentUser);

  return (
    <Fragment>
      <NavigationContainer>
      {/* <div className="navigation"> */}
        <LogoContainer to="/">
          <FashionClothingLogo className="logo" />
        </LogoContainer>
        
        {/* <div className="nav-links-container"> */}
        <NavLinksContainer>
        <NavLink to="/shop">
            SHOP
          </NavLink>
          
          {/* when the current user is sign-in then display the sigh-in 
          otherwise display the sign-out text */}
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        {isCartOpen && <CardDropDown/>}
      </NavLinksContainer>
      </NavigationContainer>
            {/* Outlet displays the rest routing after the above text */}

      <Outlet />
    </Fragment>
  );
};
export default Navigation;
